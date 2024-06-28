"use client";
import { useState, useEffect } from "react";
import { easepick } from "@easepick/core";
import { RangePlugin } from "@easepick/range-plugin";
import { PresetPlugin } from "@easepick/preset-plugin";
import { AmpPlugin } from "@easepick/amp-plugin";
import counterData from "./StatusCounterUser.json";
import bpaStatusData from "./UserBpaStatus.json";
import { StatusCountChart, HospitalBpaDrilldown, SemiCircleDonut, BpaStatusChart } from "./Chart";




export default function UserDashboard() {
    // console.log(bpaStatusData.data.userBpaStatus);
    const [category, setCategory] = useState();
    const [plotSeries, setPlotSeries] = useState();
    useEffect(() => {

        let satus_data = {};
        let last_status = [];
        bpaStatusData.data.userBpaStatus.forEach(({ Bpa, Status, Count }) => {
            !last_status.includes(Status) ? last_status.push(Status) : true;
            if (satus_data[Bpa]) {
                satus_data[Bpa].push({ Status, Count });
            } else {
                satus_data[Bpa] = [{ Status, Count }];
            }
        });
        setCategory(Object.keys(satus_data));
        let series = [];
        last_status.forEach(row => {
            let seriesData = [];
            Object.keys(satus_data).forEach((keyBpa) => {
                const found = satus_data[keyBpa].filter((el) => el.Status === row);
                if (found.length) {
                    seriesData.push(found[0].Count);
                } else {
                    seriesData.push(0);
                }
            })
            series.push({
                name: row,
                data: seriesData,
                stack: 'Asia'
            })
        })

        setPlotSeries(series)
    }, []);

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
        <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start  container-xxl "
        >
            <div className="content flex-row-fluid" id="kt_content">
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">
                        {/*begin::Header*/}
                        <div className="card-header pt-7">
                            <div className="card-toolbar">

                                <div
                                    data-kt-daterangepicker="true"
                                    data-kt-daterangepicker-opens="left"
                                    className="btn btn-sm btn-light d-flex align-items-center px-4"
                                >

                                    <div className="text-gray-600 fw-bold">Loading date range...</div>

                                    <i className="ki-duotone ki-calendar-8 text-gray-500 lh-0 fs-2 ms-2 me-0">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                        <span className="path4" />
                                        <span className="path5" />
                                        <span className="path6" />
                                    </i>
                                </div>

                            </div>

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Learn Activity</span>
                                <span className="text-gray-500 mt-1 fw-semibold fs-6">
                                    Hours per course
                                </span>
                            </h3>

                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="card-body d-flex align-items-end px-0 pt-3 pb-5">
                            <div className="d-flex flex-wrap flex-md-nowrap">
                                {/*begin::Items*/}
                                <div className="row me-md-5 w-50">
                                    {counterData.data.StatusCounter?.map((row, i) => {
                                        return <StatusSection statusData={row} key={i} />
                                    })}

                                </div>

                                <div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">

                                    <StatusCountChart dataset={counterData.data.StatusCounter} />
                                </div>

                            </div>
                        </div>
                        {/*end: Card Body*/}
                    </div>



                </div>
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">
                        {/*begin::Header*/}
                        <div className="card-header pt-7">
                            <div className="card-toolbar">

                                <div
                                    data-kt-daterangepicker="true"
                                    data-kt-daterangepicker-opens="left"
                                    className="btn btn-sm btn-light d-flex align-items-center px-4"
                                >

                                    <div className="text-gray-600 fw-bold">Loading date range...</div>

                                    <i className="ki-duotone ki-calendar-8 text-gray-500 lh-0 fs-2 ms-2 me-0">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                        <span className="path4" />
                                        <span className="path5" />
                                        <span className="path6" />
                                    </i>
                                </div>

                            </div>

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Learn Activity</span>
                                <span className="text-gray-500 mt-1 fw-semibold fs-6">
                                    Hours per course
                                </span>
                            </h3>

                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="card-body align-items-end px-0 pt-3 pb-5">
                            <div className="d-flex flex-wrap flex-md-nowrap">
                                {/*begin::Items*/}
                                <div className="row me-md-5 w-100">

                                    {category ? <BpaStatusChart category={category} plotSeries={plotSeries} /> : ``}
                                </div>
                                {/*end::Items*/}

                            </div>
                        </div>
                        {/*end: Card Body*/}
                    </div>



                </div>
            </div>
        </div>

    </>);
}