import {
  RequestProxyType,
  CustomConfigType,
  RequestType
} from "./index.type";
import Request from "./request";
import { AxiosRequestConfig, AxiosResponse } from "axios";
// import router from "@/router";
import store from "@/store";

class RequestProxy implements RequestProxyType {
  private axios: RequestType;
  private defaultCustomConfig: CustomConfigType = {
    isNeedLoading: true,
    isNeedToken: false,
    isNeedShowError: true
	};
	// 记录并行的请求次数
	private requestCount: number = 0;

  constructor(config: AxiosRequestConfig) {
    config.baseURL = this.transformUrl(config.baseURL, true);
    this.axios = new Request(config);
  }

  /**
   * 发起请求
   * @param config 配置项
   * @param customConfig 自定义配置
   */
  private async transfromRquest(
    config: AxiosRequestConfig,
    customConfig: CustomConfigType = {}
  ): Promise<AxiosResponse> {
    customConfig = { ...this.defaultCustomConfig, ...customConfig };

    this.transformUrl(config.url);
    this.handleLoading(customConfig, true);
    this.addToken(config, customConfig);
		this.requestCount++

    try {
      const result = await this.axios.request(config);
      return result;
    } catch (error) {
      const { code, config } = error

      if (code === 401) {
        // 解决 token 失效的

        // 方案一 跳转至登录页
        // store.commit('userStore/setToken', '')
        // store.commit('permissionsStore/setPermissions', {})
        // router.replace({ path: '/login', query: {
        //   redirectUrl: router.currentRoute.fullPath
        // } })

        // 方式二 自动刷新 token 并重新发起失败的请求
        const res = await this.transfromRquest({
          method: 'post',
          url: '/refresh-token'
        })
        console.log(res, '/refresh-token')
        store.commit('userStore/setToken', res.data.token)
        return this.transfromRquest(config)

        // 方式三 在请求拦截里面先校验 token 是否过期 再发起请求
      }

      this.handleError(customConfig, error);
      return Promise.reject(error);
    } finally {
			this.requestCount--
      this.handleLoading(customConfig, false);
		}
  }

  /**
   * Loading 的开启关闭
   * @param customConfig 自定义配置项
   * @param isOpen 是否开启
   */
  private handleLoading(customConfig: CustomConfigType, isOpen: boolean) {
		if (!customConfig.isNeedLoading) return;
		// 不重复开启 Loading
		if (this.requestCount !== 0) return;

		if (isOpen) {
			console.log("开启 Loading");
			return
		}

		console.log("关闭 Loading");
  }

  /**
   * token 处理
   * @param config 配置项
   * @param customConfig 自定义配置项
   */
  private addToken(config: AxiosRequestConfig, customConfig: CustomConfigType) {
    if (customConfig.isNeedToken) {
      config.headers = {
        token: store.getters['userStore/getToken'] || ''
      };
    } else {
      config.headers = {};
    }
  }

  /**
   * 错误处理
   * @param customConfig 配置项
   * @param error 错误信息对象
   */
  private handleError(customConfig: CustomConfigType, error: any) {
    if (error.message === "取消请求") return

    customConfig.isNeedShowError &&
      console.log(`错误提示：${error.message || "太火爆了，请稍后再试！"}`);
  }

  /**
   * 处理路径
   * @param url 路径
   * @param isBaseURL 是否是根路径
   */
  private transformUrl(url = "", isBaseURL = false) {
    if (!url) return url;

    if (isBaseURL) {
      if (!/\/$/.test(url)) {
        return `${url}/`;
      }

      return url;
    }

    if (/^\//.test(url)) {
      return `${url.substr(1)}`;
    }

    return url;
  }

  public async get(
    url: string,
    config?: AxiosRequestConfig,
    customConfig?: CustomConfigType
  ): Promise<AxiosResponse> {
    return this.transfromRquest(
      {
        url,
        method: "GET",
        ...config
      },
      customConfig
    );
  }

  public async post(
    url: string,
    config?: AxiosRequestConfig,
    customConfig: CustomConfigType = this.defaultCustomConfig
  ): Promise<AxiosResponse> {
    return this.transfromRquest(
      {
        url,
        method: "POST",
        ...config
      },
      customConfig
    );
  }

  public async put(
    url: string,
    config?: AxiosRequestConfig,
    customConfig: CustomConfigType = this.defaultCustomConfig
  ): Promise<AxiosResponse> {
    return this.transfromRquest(
      {
        url,
        method: "PUT",
        ...config
      },
      customConfig
    );
  }

  public async delete(
    url: string,
    config?: AxiosRequestConfig,
    customConfig: CustomConfigType = this.defaultCustomConfig
  ): Promise<AxiosResponse> {
    return this.transfromRquest(
      {
        url,
        method: "DELETE",
        ...config
      },
      customConfig
    );
  }
}

export default RequestProxy;
