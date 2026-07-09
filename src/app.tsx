import { Watermark } from 'antd';
import type { RuntimeConfig } from 'umi';
// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      autoRedirect: true,
      request: () => {},
    },
    // menuItemRender: () => {},
    unAccessible: <>404页面</>,
  };
};

export const request = {
  timeout: 5000,
};

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return (
    <Watermark
      content={'admin'}
      font={{
        color: 'rgba(0, 0, 0, 0.08)',
        fontSize: 16,
      }}
      gap={[100, 100]}
      rotate={-22}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
      zIndex={999}
    >
      {container}
    </Watermark>
  );
};
