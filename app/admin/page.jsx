"use client"
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Authoriztion from "./Authorizaton";
import DashboardOne from "./dashboard/DashboardOne";
// https://codesandbox.io/p/sandbox/react-select-all-checkbox-jbub2?file=%2Fsrc%2Findex.js%3A15%2C3-29%2C5

export default function page({ params }) {

  return (<>

    <DashboardOne />
    <Marquee>
      I can be a React component, multiple React components, or just some text.Event is called on select days (before submit selection). When autoApply option is false.
    </Marquee>
  </>);
}
