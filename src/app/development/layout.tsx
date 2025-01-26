import "../globals.css";
import React from 'react';
import { Sidebar } from "@/components/sidebar/sidebar";


const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%'}}>
      <Sidebar/>
      <div>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
