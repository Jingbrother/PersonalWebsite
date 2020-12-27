/**
 * 表示当前属性或变量的值必然不为undefined
 * * 如果当前字段类型不含null并且字段非可选，则无需进行空值检测
 * * 配合TS的strickNullCheck使用
 */
declare type Exist<T> = Exclude<T, undefined>;

/**
 * 表示当前属性或变量的值必然不能为undefined，但可以为bull
 * * 空值检查只需要针对null进行
 * * 配合TS的strickNullCheck使用
 */
declare type Nullable<T> = Exist<T> | null;

/** 明确表示当前目标可能为undefined */
declare type Unsure<T> = Exist<T> | undefined;

/**
 * 枚举键类型
 * ```typescript
 * enum TestEnum {
 *   A = 1,
 *   B = 2
 * }
 * type X = EnumKeys<typeof TestEnum>; // type X = "A" | "B"
 * ```
 **/
declare type EnumKeys<EnumType> = Exclude<keyof EnumType, keyof Object>;

/**
 * * 路由参数对象包裹类型，支持所有参数参数可空，在设计接口是不需要使用可控字段
 * * 前端使用Query<T>包裹后的接口，显示为空参数提供undefined，不会触发类型错误
 * * 可以免去node层接口使用的时候，很多没意义的空值检查
 * ```typescript
 * // 用法：
 * interface TestQuery {
 *   name: "a" | "b";
 *   gender: "male" | "female";
 *   x : 1 | 2 | 3;
 *   type: boolean;
 * }
 *
 * declare const a: Query<TestQuery>;
 * // a的类型被映射成：
 * interface {
 *   name: "a" | "b" | undefined;
 *   gender: "male" | "female" | undefined;
 *   x : 1 | 2 | 3 | undefined;
 *   type: boolean | undefined;
 * }
 * ```
 *  */
declare type Query<T> = { [key in keyof T]: T[key] | undefined };

/** 构造函数描述 */
declare interface Constructor<T> {
  new (...args: any[]): T;
}

/** 明确表示当前接口中所有字段都为严格状态 */
declare type StrictType<T> = { [key in keyof T]: Exist<T[key]> };

/** 可自定义扩展的Object类型 */
declare interface PureObject {
  [key: string]: any;
}

/**
 * 分页响应对象结构
 */
declare interface PaginationResult<T = any> {
  items: Array<T>;
  paginator: {
    pageSize: number;
    page: number;
    totalCount: number;
  };
}

declare interface IPagination {
  current: number;
  total: number;
  pageSize: number;
}

/**
 * 时间对象可能是字符串、时间戳数或一个 Date 对象
 */
declare type Time = string | number | Date;

declare const __DEBUG__: boolean;
declare let __webpack_public_path__: string | undefined;

type YouzanProjects =
  | "www"
  | "bbs"
  | "wap"
  | "youzan"
  | "job"
  | "open"
  | "pf"
  | "fuwu"
  | "vip"
  | "xuetang"
  | "sm"
  | "fx"
  | "h5"
  | "imgcdn"
  | "im"
  | "byzcdn"
  | "dlyzcdn"
  | "login"
  | "trade"
  | "uic"
  | "youzanyun"
  | "dev_youzanyun"
  | "zhifuyun"
  | "console_youzanyun"
  | "console_youzan"
  | "yun_youzan"
  | "wsc"
  | "materials"
  | "base";

interface IDmpGlobal {
  openHost: string;
  accountInfo: {
    aliasname?: string;
    email?: string;
    gender: boolean;
    id: number;
    mobile: number;
    realname?: string;
    username: string;
  };
  mobile: string;
  host: string;
  env: "development";
  errors: {
    [key: string]: string;
  };
  url: { [key in YouzanProjects]?: string };
}

declare const _global: IDmpGlobal;

// tslint:disable-next-line
interface Window {
  decorateSDK: any;
  postMessager: any;
  decorateActions: any;
  _global: IDmpGlobal;
  __GARDEN__: boolean;
}

declare module "*.m.scss" {
  const content: { [className: string]: string };
  export default content;
}
