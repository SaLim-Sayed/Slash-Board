"use client";

import {
  BarChartOutlined,
  CloudOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Drawer, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";

const { Header, Content, Footer } = Layout;

const sliderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const menuItems: {
  key: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}[] = [
  { key: "1", icon: <UserOutlined />, label: "ارضيات", path: "/user" },
  { key: "2", icon: <VideoCameraOutlined />, label: "حوائط", path: "/video" },
  { key: "3", icon: <UploadOutlined />, label: "جلد", path: "/upload" },
  { key: "4", icon: <BarChartOutlined />, label: "شمواه", path: "/charts" },
  { key: "5", icon: <CloudOutlined />, label: "اس بي سي", path: "/cloud" },
];

const MainNav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedItem = menuItems.find((item) => item.key === e.key);
    if (selectedItem) {
      router.push(selectedItem.path);
    }
  };

  return (
    <Layout hasSider>
      {/* Sidebar for larger screens */}
      {/* <Sider
        className="hidden sm:block"
        style={sliderStyle}
        collapsed={collapsed}
      >
        <div className="logo text-2xl font-[950] bg-white h-16 flex items-center justify-center">
          <div className="logo z-50 text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-[950] bg-white h-16 flex items-center justify-center">
            Slash Board
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={handleMenuClick}
          items={menuItems.map(({ key, icon, label }) => ({
            key,
            icon,
            label,
          }))}
        />
      </Sider> */}

      {/* Main layout */}
      <Layout>
        <Header
          className="flex z-50 justify-between fixed top-0 left-0 right-0 pr-7"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div className="logo text-2xl font-[950] bg-white h-16 flex items-center justify-center">
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined className="text-2xl bg-gradient-to-r from-blue-600 bg-clip-text" />
                ) : (
                  <MenuFoldOutlined />
                )
              }
              onClick={() => {
                setCollapsed(!collapsed);
                showDrawer(); // Show drawer on small screens
              }}
              variant="dashed"
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="logo text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-[950] bg-white h-16 flex items-center justify-center">
              Slash Board
            </div>
          </div>
          <Button
            id="lang"
            variant="outlined"
            className="mx-2 flex items-center mt-4 max-w-24 p-2 text-[#488102] border-[#488102]"
          >
            <BiWorld />
            lang
          </Button>
        </Header>

        <Content style={{ overflow: "initial" }}>
          <div
            className="mt-10"
            style={{
              textAlign: "center",
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          className="bg-[#002140] text-white"
          style={{ textAlign: "center" }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>

      <Drawer
        title={
          <div className="logo text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-[950] bg-white h-16 flex items-center justify-center">
            Slash Board
          </div>
        }
        onClose={onClose}
        open={open}
        placement="left"
        width={250}
        style={sliderStyle}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={handleMenuClick}
          items={menuItems.map(({ key, icon, label }) => ({
            key,
            icon,
            label,
          }))}
        />
      </Drawer>
    </Layout>
  );
};

export default MainNav;
