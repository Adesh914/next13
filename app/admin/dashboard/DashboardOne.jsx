"use client";
import { useState, useEffect } from "react";
import { easepick } from "@easepick/core";
import { RangePlugin } from "@easepick/range-plugin";
import { PresetPlugin } from "@easepick/preset-plugin";
import { AmpPlugin } from "@easepick/amp-plugin";

import { useQuery, gql } from "@apollo/client";
import commonData from "../../../sql/common-data.json";
import counterData from "./StatusCounter.json";
import { StatusCountChart, HospitalBpaDrilldown, SemiCircleDonut } from "./Chart";
// export const DASHBOARD_QUERY = gql``;
// https://stackoverflow.com/questions/41791015/mongoose-group-and-count
// https://stackoverflow.com/questions/51019596/how-get-count-from-mongodb-with-different-status-from-one-collection


export default function DashboardOne({ params }) {
    // const [allStatus, setAllStatus] = useState([...commonData.preauth_status, ...commonData.claim_status]);
    // const [statusCounter, setStatusCounter] = useState([]);
    const [fetchDate, setFetchDate] = useState({
        start: '',
        end: ''
    });

    useEffect(() => {
        const picker = new easepick.create({
            element: document.getElementById('datepickerRange'),
            css: [
                'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
                'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css',
                'https://cdn.jsdelivr.net/npm/@easepick/preset-plugin@1.2.1/dist/index.css',
                'https://cdn.jsdelivr.net/npm/@easepick/amp-plugin@1.2.1/dist/index.css'
            ],
            plugins: [RangePlugin, PresetPlugin, AmpPlugin],
            AmpPlugin: {
                dropdown: {
                    months: true,
                    years: true,
                    minYear: 1960,
                    maxYear: (new Date()).getFullYear(),
                    weekNumbers: true
                },
            },
            zIndex: 10,
            PresetPlugin: {
                position: 'right',
            },
            setup(picker) {
                picker.on('select', (e) => {
                    const { end, start } = e.detail;
                    console.log(e.detail)
                    setFetchDate((old) => {
                        return {
                            ...old,
                            ["end"]: end,
                            ["start"]: start
                        }
                    })
                    // do something
                });
            },
        });
    }, [])

    const StatusSection = ({ statusData }) => {
        const [data] = statusData.StatusData;
        return (
            <div className="col-lg-6 d-flex border border-gray-300 border-dashed rounded p-2 mb-2">
                {/*begin::Block*/}
                <div className="d-flex align-items-center flex-grow-1 me-1 me-sm-5">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-30px me-2">
                        <span className="symbol-label">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                            <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.3"
                                        d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </span>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Section*/}
                    <div className="me-2">
                        <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                            {data.Name}
                        </a>
                        {/* <span className="text-gray-400 fw-bold d-block fs-7">
                            Great, you always attending class. keep it up
                        </span> */}
                    </div>
                    {/*end::Section*/}
                </div>
                {/*end::Block*/}
                {/*begin::Info*/}
                <div className="d-flex align-items-center">
                    <span className="text-dark fw-bolder fs-2x">{statusData.Count}</span>
                    {/* <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                        /
                    </span>
                    <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                        76
                    </span>
                    <span className="badge badge-lg badge-light-success align-self-center px-2">
                        95%
                    </span> */}
                </div>
                {/*end::Info*/}
            </div>
        )
    }
    return (<>
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  container-xxl ">

            <div className="content flex-row-fluid" id="kt_content">
                <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">


                    <div className="col-xl-3">
                        {/*begin::Card widget 3*/}
                        <div
                            className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                            style={{
                                backgroundColor: "#F1416C",
                                backgroundImage: 'url("../assets/media/svg/shapes/wave-bg-red.svg")'
                            }}
                        >
                            {/*begin::Header*/}
                            <div className="card-header pt-5 mb-3">
                                <SemiCircleDonut />

                            </div>

                            <div className="card-body d-flex align-items-end mb-3">
                                {/*begin::Info*/}
                                <div className="d-flex align-items-center">
                                    <span className="fs-4hx text-white fw-bold me-6">1.2k</span>
                                    <div className="fw-bold fs-6 text-white">
                                        <span className="d-block">Inbound</span>
                                        <span className="">Calls</span>
                                    </div>
                                </div>
                                {/*end::Info*/}
                            </div>
                            {/*end::Card body*/}
                            {/*begin::Card footer*/}
                            <div
                                className="card-footer"
                                style={{
                                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                                    background: "rgba(0, 0, 0, 0.15)"
                                }}
                            >
                                {/*begin::Progress*/}
                                <div className="fw-bold text-white py-2">
                                    <span className="fs-1 d-block">935</span>
                                    <span className="opacity-50">Problems Solved</span>
                                </div>
                                {/*end::Progress*/}
                            </div>
                            {/*end::Card footer*/}
                        </div>
                        {/*end::Card widget 3*/}{" "}
                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-xl-3">
                        {/*begin::Card widget 3*/}
                        <div
                            className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                            style={{
                                backgroundColor: "#7239EA",
                                backgroundImage: 'url("../assets/media/svg/shapes/wave-bg-purple.svg")'
                            }}
                        >
                            {/*begin::Header*/}
                            <div className="card-header pt-5 mb-3">
                                {/*begin::Icon*/}
                                <div
                                    className="d-flex flex-center rounded-circle h-80px w-80px"
                                    style={{
                                        border: "1px dashed rgba(255, 255, 255, 0.4)",
                                        backgroundColor: "#7239EA"
                                    }}
                                >
                                    <i className="ki-duotone ki-call text-white fs-2qx lh-0">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                        <span className="path4" />
                                        <span className="path5" />
                                        <span className="path6" />
                                        <span className="path7" />
                                        <span className="path8" />
                                    </i>
                                </div>
                                {/*end::Icon*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Card body*/}
                            <div className="card-body d-flex align-items-end mb-3">
                                {/*begin::Info*/}
                                <div className="d-flex align-items-center">
                                    <span className="fs-4hx text-white fw-bold me-6">427</span>
                                    <div className="fw-bold fs-6 text-white">
                                        <span className="d-block">Outbound</span>
                                        <span className="">Calls</span>
                                    </div>
                                </div>
                                {/*end::Info*/}
                            </div>
                            {/*end::Card body*/}
                            {/*begin::Card footer*/}
                            <div
                                className="card-footer"
                                style={{
                                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                                    background: "rgba(0, 0, 0, 0.15)"
                                }}
                            >
                                {/*begin::Progress*/}
                                <div className="fw-bold text-white py-2">
                                    <span className="fs-1 d-block">386</span>
                                    <span className="opacity-50">Generated Leads</span>
                                </div>
                                {/*end::Progress*/}
                            </div>
                            {/*end::Card footer*/}
                        </div>
                        {/*end::Card widget 3*/}{" "}
                    </div>
                    {/*end::Col*/}
                    <div className="col-xl-3">
                        {/*begin::Card widget 3*/}
                        <div
                            className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                            style={{
                                backgroundColor: "#F1416C",
                                backgroundImage: 'url("../assets/media/svg/shapes/wave-bg-red.svg")'
                            }}
                        >
                            {/*begin::Header*/}
                            <div className="card-header pt-5 mb-3">
                                {/*begin::Icon*/}
                                <div
                                    className="d-flex flex-center rounded-circle h-80px w-80px"
                                    style={{
                                        border: "1px dashed rgba(255, 255, 255, 0.4)",
                                        backgroundColor: "#F1416C"
                                    }}
                                >
                                    <i className="ki-duotone ki-call text-white fs-2qx lh-0">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                        <span className="path4" />
                                        <span className="path5" />
                                        <span className="path6" />
                                        <span className="path7" />
                                        <span className="path8" />
                                    </i>
                                </div>
                                {/*end::Icon*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Card body*/}
                            <div className="card-body d-flex align-items-end mb-3">
                                {/*begin::Info*/}
                                <div className="d-flex align-items-center">
                                    <span className="fs-4hx text-white fw-bold me-6">1.2k</span>
                                    <div className="fw-bold fs-6 text-white">
                                        <span className="d-block">Inbound</span>
                                        <span className="">Calls</span>
                                    </div>
                                </div>
                                {/*end::Info*/}
                            </div>
                            {/*end::Card body*/}
                            {/*begin::Card footer*/}
                            <div
                                className="card-footer"
                                style={{
                                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                                    background: "rgba(0, 0, 0, 0.15)"
                                }}
                            >
                                {/*begin::Progress*/}
                                <div className="fw-bold text-white py-2">
                                    <span className="fs-1 d-block">935</span>
                                    <span className="opacity-50">Problems Solved</span>
                                </div>
                                {/*end::Progress*/}
                            </div>
                            {/*end::Card footer*/}
                        </div>
                        {/*end::Card widget 3*/}{" "}
                    </div>
                    <div className="col-xl-3">
                        {/*begin::Card widget 3*/}
                        <div
                            className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                            style={{
                                backgroundColor: "#7239EA",
                                backgroundImage: 'url("../assets/media/svg/shapes/wave-bg-purple.svg")'
                            }}
                        >
                            {/*begin::Header*/}
                            <div className="card-header pt-5 mb-3">
                                {/*begin::Icon*/}
                                <div
                                    className="d-flex flex-center rounded-circle h-80px w-80px"
                                    style={{
                                        border: "1px dashed rgba(255, 255, 255, 0.4)",
                                        backgroundColor: "#7239EA"
                                    }}
                                >
                                    <i className="ki-duotone ki-call text-white fs-2qx lh-0">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                        <span className="path4" />
                                        <span className="path5" />
                                        <span className="path6" />
                                        <span className="path7" />
                                        <span className="path8" />
                                    </i>


                                </div>
                                {/*end::Icon*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Card body*/}
                            <div className="card-body d-flex align-items-end mb-3">
                                {/*begin::Info*/}

                                <div className="d-flex align-items-center">
                                    <span className="fs-4hx text-white fw-bold me-6">427</span>
                                    <div className="fw-bold fs-6 text-white">
                                        <span className="d-block">Outbound</span>
                                        <span className="">Calls</span>
                                    </div>
                                </div>
                                {/*end::Info*/}
                            </div>
                            {/*end::Card body*/}
                            {/*begin::Card footer*/}
                            <div
                                className="card-footer"
                                style={{
                                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                                    background: "rgba(0, 0, 0, 0.15)"
                                }}
                            >
                                {/*begin::Progress*/}
                                <div className="fw-bold text-white py-2">
                                    <span className="fs-1 d-block">386</span>
                                    <span className="opacity-50">Generated Leads</span>
                                </div>
                                {/*end::Progress*/}
                            </div>
                            {/*end::Card footer*/}
                        </div>
                        {/*end::Card widget 3*/}{" "}
                    </div>
                </div>


                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                    {/*begin::Col*/}
                    <div className="col-xxl-8 col-xxl-12">
                        {/*begin::Chart widget 22*/}
                        <div className="card h-xl-100">
                            {/*begin::Header*/}
                            <div className="card-header position-relative py-0 border-bottom-2">
                                {/*begin::Nav*/}
                                <div className="card-toolbar">
                                    {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                                    <div
                                        id="datepickerRange"
                                        data-kt-daterangepicker="true"
                                        data-kt-daterangepicker-opens="left"
                                        className="btn btn-sm btn-light d-flex align-items-center px-4"
                                    >
                                        {/*begin::Display range*/}
                                        <div className="text-gray-600 fw-bold">Loading date range...</div>
                                        {/*end::Display range*/}
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                        <span className="svg-icon svg-icon-1 ms-2 me-0">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.3"
                                                    d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </div>
                                    {/*end::Daterangepicker*/}
                                </div>
                                <ul className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-3">
                                    {/*begin::Item*/}
                                    <li className="nav-item p-0 ms-0 me-8">
                                        {/*begin::Link*/}
                                        <a
                                            className="nav-link btn btn-color-muted active px-0"
                                            data-bs-toggle="tab"
                                            id="kt_chart_widgets_22_tab_1"
                                            href="#kt_chart_widgets_22_tab_content_1"
                                        >
                                            {/*begin::Subtitle*/}
                                            <span className="nav-text fw-semibold fs-4 mb-3">Overview</span>
                                            {/*end::Subtitle*/}
                                            {/*begin::Bullet*/}
                                            <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded" />
                                            {/*end::Bullet*/}
                                        </a>
                                        {/*end::Link*/}
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <li className="nav-item p-0 ms-0">
                                        {/*begin::Link*/}
                                        <a
                                            className="nav-link btn btn-color-muted px-0"
                                            data-bs-toggle="tab"
                                            id="kt_chart_widgets_22_tab_2"
                                            href="#kt_chart_widgets_22_tab_content_2"
                                        >
                                            {/*begin::Subtitle*/}
                                            <span className="nav-text fw-semibold fs-4 mb-3">
                                                Performance
                                            </span>
                                            {/*end::Subtitle*/}
                                            {/*begin::Bullet*/}
                                            <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded" />
                                            {/*end::Bullet*/}
                                        </a>
                                        {/*end::Link*/}
                                    </li>
                                    {/*end::Item*/}
                                </ul>
                                {/*end::Nav*/}
                                {/*begin::Toolbar*/}

                                {/*end::Toolbar*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Body*/}
                            <div className="card-body pb-3">
                                {/*begin::Tab Content*/}
                                <div className="tab-content">
                                    {/*begin::Tap pane*/}
                                    <div
                                        className="tab-pane fade show active"
                                        id="kt_chart_widgets_22_tab_content_1"
                                    >
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-wrap flex-md-nowrap">
                                            {/*begin::Items*/}
                                            <div className="row me-md-5 w-50">
                                                {counterData.data.StatusCounter?.map((row, i) => {
                                                    return <StatusSection statusData={row} key={i} />
                                                })}

                                            </div>
                                            {/*end::Items*/}
                                            {/*begin::Container*/}
                                            <div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">
                                                {/*begin::Title*/}
                                                {/*  <div className="fs-4 fw-bold text-gray-900 text-center mb-5">
                                                    Session Attendance <br />
                                                    for Current Academic Year
                                                </div> */}
                                                {/*end::Title*/}
                                                {/*begin::Chart*/}
                                                {/* <div
                                                    id="kt_chart_widgets_22_chart_1"
                                                    className="mx-auto mb-4"
                                                /> */}
                                                <StatusCountChart dataset={counterData.data.StatusCounter} />

                                                {/*end::Chart*/}

                                            </div>
                                            {/*end::Container*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Tap pane*/}
                                    {/*begin::Tap pane*/}
                                    <div
                                        className="tab-pane fade "
                                        id="kt_chart_widgets_22_tab_content_2"
                                    >
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-wrap flex-md-nowrap">
                                            {/*begin::Items*/}
                                            <div className="me-md-5 w-100">
                                                {/*begin::Item*/}
                                                <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                                    {/*begin::Block*/}
                                                    <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-4">
                                                            <span className="symbol-label">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            x={2}
                                                                            y={2}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={13}
                                                                            y={2}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={13}
                                                                            y={13}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={2}
                                                                            y={13}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}
                                                        <div className="me-2">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                                            >
                                                                Homeworks
                                                            </a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">
                                                                Don’t forget to turn in your task
                                                            </span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                                    {/*end::Block*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-dark fw-bolder fs-2x">423</span>
                                                        <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                                                            /
                                                        </span>
                                                        <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                                                            154
                                                        </span>
                                                        <span className="badge badge-lg badge-light-danger align-self-center px-2">
                                                            74%
                                                        </span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                                    {/*begin::Block*/}
                                                    <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-4">
                                                            <span className="symbol-label">
                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs025.svg*/}
                                                                <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}
                                                        <div className="me-2">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                                            >
                                                                Tests
                                                            </a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">
                                                                You take 12 subjects at this semester
                                                            </span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                                    {/*end::Block*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-dark fw-bolder fs-2x">43</span>
                                                        <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                                                            /
                                                        </span>
                                                        <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                                                            53
                                                        </span>
                                                        <span className="badge badge-lg badge-light-info align-self-center px-2">
                                                            65%
                                                        </span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                                    {/*begin::Block*/}
                                                    <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-4">
                                                            <span className="symbol-label">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                                                <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}
                                                        <div className="me-2">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                                            >
                                                                Attendance
                                                            </a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">
                                                                Great, you always attending class. keep it up
                                                            </span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                                    {/*end::Block*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-dark fw-bolder fs-2x">53</span>
                                                        <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                                                            /
                                                        </span>
                                                        <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                                                            94
                                                        </span>
                                                        <span className="badge badge-lg badge-light-primary align-self-center px-2">
                                                            87%
                                                        </span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Item*/}
                                            </div>
                                            {/*end::Items*/}
                                            {/*begin::Container*/}
                                            <div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">
                                                {/*begin::Title*/}
                                                <div className="fs-4 fw-bold text-gray-900 text-center mb-5">
                                                    Session Attendance <br />
                                                    for Current Academic Year
                                                </div>
                                                {/*end::Title*/}
                                                {/*begin::Chart*/}
                                                <div
                                                    id="kt_chart_widgets_22_chart_2"
                                                    className="mx-auto mb-4"
                                                />
                                                {/*end::Chart*/}
                                                {/*begin::Labels*/}
                                                <div className="mx-auto">
                                                    {/*begin::Label*/}
                                                    <div className="d-flex align-items-center mb-2">
                                                        {/*begin::Bullet*/}
                                                        <div className="bullet bullet-dot w-8px h-7px bg-success me-2" />
                                                        {/*end::Bullet*/}
                                                        {/*begin::Label*/}
                                                        <div className="fs-8 fw-semibold text-muted">
                                                            Precent(133)
                                                        </div>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Label*/}
                                                    {/*begin::Label*/}
                                                    <div className="d-flex align-items-center mb-2">
                                                        {/*begin::Bullet*/}
                                                        <div className="bullet bullet-dot w-8px h-7px bg-primary me-2" />
                                                        {/*end::Bullet*/}
                                                        {/*begin::Label*/}
                                                        <div className="fs-8 fw-semibold text-muted">
                                                            Illness(9)
                                                        </div>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Label*/}
                                                    {/*begin::Label*/}
                                                    <div className="d-flex align-items-center mb-2">
                                                        {/*begin::Bullet*/}
                                                        <div className="bullet bullet-dot w-8px h-7px bg-info me-2" />
                                                        {/*end::Bullet*/}
                                                        {/*begin::Label*/}
                                                        <div className="fs-8 fw-semibold text-muted">Late(2)</div>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Label*/}
                                                    {/*begin::Label*/}
                                                    <div className="d-flex align-items-center mb-2">
                                                        {/*begin::Bullet*/}
                                                        <div className="bullet bullet-dot w-8px h-7px bg-danger me-2" />
                                                        {/*end::Bullet*/}
                                                        {/*begin::Label*/}
                                                        <div className="fs-8 fw-semibold text-muted">Absent(3)</div>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Labels*/}
                                            </div>
                                            {/*end::Container*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Tap pane*/}
                                </div>
                                {/*end::Tab Content*/}
                            </div>
                            {/*end: Card Body*/}
                        </div>
                        {/*end::Chart widget 22*/}{" "}
                    </div>
                    {/*end::Col*/}

                </div>




                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                    {/*begin::Col*/}
                    <div className="col-xxl-8 col-xxl-12">
                        {/*begin::Chart widget 22*/}
                        <div className="card h-xl-100">
                            {/*begin::Header*/}
                            <div className="card-header position-relative py-0 border-bottom-2">
                                {/*begin::Nav*/}
                                <ul className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-3">
                                    {/*begin::Item*/}
                                    <li className="nav-item p-0 ms-0 me-8">
                                        {/*begin::Link*/}
                                        <a
                                            className="nav-link btn btn-color-muted active px-0"
                                            data-bs-toggle="tab"
                                            id="kt_chart_widgets_22_tab_1"
                                            href="#kt_chart_widgets_22_tab_content_1"
                                        >
                                            {/*begin::Subtitle*/}
                                            <span className="nav-text fw-semibold fs-4 mb-3">Overview</span>
                                            {/*end::Subtitle*/}
                                            {/*begin::Bullet*/}
                                            <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded" />
                                            {/*end::Bullet*/}
                                        </a>
                                        {/*end::Link*/}
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <li className="nav-item p-0 ms-0">
                                        {/*begin::Link*/}
                                        <a
                                            className="nav-link btn btn-color-muted px-0"
                                            data-bs-toggle="tab"
                                            id="kt_chart_widgets_22_tab_2"
                                            href="#kt_chart_widgets_22_tab_content_2"
                                        >
                                            {/*begin::Subtitle*/}
                                            <span className="nav-text fw-semibold fs-4 mb-3">
                                                Performance
                                            </span>
                                            {/*end::Subtitle*/}
                                            {/*begin::Bullet*/}
                                            <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded" />
                                            {/*end::Bullet*/}
                                        </a>
                                        {/*end::Link*/}
                                    </li>
                                    {/*end::Item*/}
                                </ul>
                                {/*end::Nav*/}
                                {/*begin::Toolbar*/}
                                <div className="card-toolbar">
                                    {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                                    <div
                                        id="datepickerRange"
                                        data-kt-daterangepicker="true"
                                        data-kt-daterangepicker-opens="left"
                                        className="btn btn-sm btn-light d-flex align-items-center px-4"
                                    >
                                        {/*begin::Display range*/}
                                        <div className="text-gray-600 fw-bold">Loading date range...</div>
                                        {/*end::Display range*/}
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                        <span className="svg-icon svg-icon-1 ms-2 me-0">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.3"
                                                    d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </div>
                                    {/*end::Daterangepicker*/}
                                </div>
                                {/*end::Toolbar*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Body*/}
                            <div className="card-body pb-3">
                                {/*begin::Tab Content*/}
                                <div className="tab-content">
                                    {/*begin::Tap pane*/}
                                    <div
                                        className="tab-pane fade show active"
                                        id="kt_chart_widgets_22_tab_content_1"
                                    >
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-wrap flex-md-nowrap">
                                            {/*begin::Items*/}
                                            <div className="row me-md-5 w-100">

                                                <HospitalBpaDrilldown />
                                            </div>
                                            {/*end::Items*/}

                                        </div>
                                        {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Tap pane*/}
                                    {/*begin::Tap pane*/}
                                    <div
                                        className="tab-pane fade "
                                        id="kt_chart_widgets_22_tab_content_2 2 "
                                    >
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-wrap flex-md-nowrap">
                                            {/*begin::Items*/}
                                            <div className="me-md-5 w-100">
                                                {/*begin::Item*/}
                                                <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                                    {/*begin::Block*/}
                                                    <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-4">
                                                            <span className="symbol-label">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            x={2}
                                                                            y={2}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={13}
                                                                            y={2}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={13}
                                                                            y={13}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.3"
                                                                            x={2}
                                                                            y={13}
                                                                            width={9}
                                                                            height={9}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}
                                                        <div className="me-2">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                                            >
                                                                Homeworks
                                                            </a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">
                                                                Don’t forget to turn in your task
                                                            </span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                                    {/*end::Block*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-dark fw-bolder fs-2x">423</span>
                                                        <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                                                            /
                                                        </span>
                                                        <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                                                            154
                                                        </span>
                                                        <span className="badge badge-lg badge-light-danger align-self-center px-2">
                                                            74%
                                                        </span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                                    {/*begin::Block*/}
                                                    <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-4">
                                                            <span className="symbol-label">
                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs025.svg*/}
                                                                <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}
                                                        <div className="me-2">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                                            >
                                                                Tests
                                                            </a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">
                                                                You take 12 subjects at this semester
                                                            </span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                                    {/*end::Block*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-dark fw-bolder fs-2x">43</span>
                                                        <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                                                            /
                                                        </span>
                                                        <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                                                            53
                                                        </span>
                                                        <span className="badge badge-lg badge-light-info align-self-center px-2">
                                                            65%
                                                        </span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Item*/}
                                                {/*begin::Item*/}
                                                <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                                    {/*begin::Block*/}
                                                    <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-4">
                                                            <span className="symbol-label">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                                                <span className="svg-icon svg-icon-2qx svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}
                                                        <div className="me-2">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                                            >
                                                                Attendance
                                                            </a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">
                                                                Great, you always attending class. keep it up
                                                            </span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                                    {/*end::Block*/}
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-dark fw-bolder fs-2x">53</span>
                                                        <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">
                                                            /
                                                        </span>
                                                        <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">
                                                            94
                                                        </span>
                                                        <span className="badge badge-lg badge-light-primary align-self-center px-2">
                                                            87%
                                                        </span>
                                                    </div>
                                                    {/*end::Info*/}
                                                </div>
                                                {/*end::Item*/}
                                            </div>
                                            {/*end::Items*/}

                                        </div>
                                        {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Tap pane*/}
                                </div>
                                {/*end::Tab Content*/}
                            </div>
                            {/*end: Card Body*/}
                        </div>
                        {/*end::Chart widget 22*/}{" "}
                    </div>
                    {/*end::Col*/}

                </div>
            </div>
        </div>

    </>)
}