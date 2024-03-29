"use client";


import { useEffect, useState } from "react";
// import client from "@/lib/apollo-client";

import { gql, useMutation, useQuery } from "@apollo/client";
import TabGeneral from "./TabGeneral";
import TabAdvance from "./TabAdvance";

// import "@/public/assets/plugins/custom/formrepeater/formrepeater.bundle.js"

const submitData = gql`
mutation ($input: AdminInsert){
    newAdmin(input: $input){
        FullName
        DisplayName
        UserName
        Password
        ThumbImage
    }
}
`;
const ALL_PRODUCT = gql`
query GetProducts($qty: Int){
    getProducts {
      id
      productionCapacity
      name
    }
    dropDown(qty: $qty) {
        id
        name  
        }
  }  
`;

export default function UserForm() {
    const [advanceQty, setAdvanceQty] = useState(0)
    const [generalData, setGeneralData] = useState({
        generalTab: [],
        generalDefault: [],
        advanceTab: [],
        advanceDefault: []
    });



    const productDropdown = useQuery(ALL_PRODUCT, {
        variables: {
            qty: advanceQty
        },
        onCompleted: (data) => {
            console.log("ALL_PRODUCT:", data);
            let general = [];
            let advance = [];
            data.getProducts.map((product) => {
                let IsExist = false;
                Object.keys(general).some((k) => {
                    if (general[k]['value'] === parseInt(product.productionCapacity)) { IsExist = true; return false; }
                })
                if (IsExist) {
                    return false;
                }
                general.push({ value: product.productionCapacity, label: product.productionCapacity })
            });

            data.dropDown.map((d) => {
                advance.push({ value: d.id, label: d.name })
            })

            // data.drop
            setGeneralData({
                ...generalData,
                "generalTab": general,
                "advanceTab": advance
            });
        },
        onError: (error) => {

        }
    });

    const generalTabChange = (e) => {
        console.log("generalTabChange", e.value)
        setGeneralData({
            ...generalData,
            "generalDefault": [e],

        });
        setAdvanceQty(e.value);
        productDropdown.refetch()
    }
    const advanceTabChange = (e) => {
        setGeneralData({
            ...generalData,
            "advanceDefault": [e],

        });
    }



    const submitHandler = (e) => {
        e.preventDefault();

        // fromValidator();
        // newAdmin({
        //     "input": {
        //         "FullName": "Ravikant1",
        //         "DisplayName": "Rkp1",
        //         "UserName": "rkp1@gmail.com",
        //         "Password": "admin@123",
        //         "ThumbImage": "user.png"
        //     }
        // });


    }
    useEffect(() => {
        console.log('generalData', generalData)
    }, [generalData]);
    return (
        <>

            <div className="toolbar mb-n1 pt-3 mb-lg-n3 pt-lg-6" id="kt_toolbar">
                {/*begin::Container*/}
                <div id="kt_toolbar_container" className=" container-xxl  d-flex flex-stack flex-wrap gap-2">
                    {/*begin::Page title*/}
                    <div className="page-title d-flex flex-column align-items-start me-3 py-2 py-lg-0 gap-2">
                        {/*begin::Title*/}
                        <h1 className="d-flex text-dark fw-bold m-0 fs-3">
                            Product Form
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Breadcrumb*/}
                        <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7">
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-600">
                                <a href="../../../index.html" className="text-gray-600 text-hover-primary">
                                    Home                          </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-600">
                                eCommerce                                          </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-600">
                                Catalog                                          </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-500">
                                Add Product                  </li>
                            {/*end::Item*/}
                        </ul>
                        {/*end::Breadcrumb*/}
                    </div>
                    {/*end::Page title*/}
                    {/*begin::Actions*/}
                    <div className="d-flex align-items-center">
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-icon btn-color-primary bg-body w-35px h-35px w-lg-40px h-lg-40px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                            {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-md-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z" fill="currentColor" />
                                <path d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z" fill="currentColor" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </a>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-icon btn-color-success bg-body w-35px h-35px w-lg-40px h-lg-40px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                            {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-md-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z" fill="currentColor" />
                                <rect x={11} y={19} width={10} height={2} rx={1} transform="rotate(-90 11 19)" fill="currentColor" />
                                <rect x={7} y={13} width={10} height={2} rx={1} fill="currentColor" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </a>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-icon btn-color-warning bg-body w-35px h-35px w-lg-40px h-lg-40px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-md-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                                <rect x={7} y={17} width={6} height={2} rx={1} fill="currentColor" />
                                <rect x={7} y={12} width={10} height={2} rx={1} fill="currentColor" />
                                <rect x={7} y={7} width={6} height={2} rx={1} fill="currentColor" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </a>
                        {/*end::Button*/}
                        {/*begin::Daterange*/}
                        <a href="#" className="btn btn-flex bg-body h-35px h-lg-40px px-5" id="kt_dashboard_daterangepicker" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-trigger="hover" data-bs-original-title="Select dashboard daterange" data-kt-initialized={1}>
                            <span className="me-4">
                                <span className="text-muted fw-semibold me-1" id="kt_dashboard_daterangepicker_title">Today:</span>
                                <span className="text-primary fw-bold" id="kt_dashboard_daterangepicker_date">Mar 16</span>
                            </span>
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                            <span className="svg-icon svg-icon-4 m-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}          </a>
                        {/*end::Daterange*/}
                    </div>
                    {/*end::Actions*/}
                </div>
                {/*end::Container*/}
            </div>

            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  container-xxl ">
                {/*begin::Post*/}
                <div className="content flex-row-fluid" id="kt_content">
                    {/*begin::Form*/}
                    <form id="kt_ecommerce_add_product_form" onSubmit={submitHandler} className="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework" >

                        {/*begin::Main column*/}
                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                            {/*begin:::Tabs*/}
                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2" role="tablist">
                                {/*begin:::Tab item*/}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_product_general" aria-selected="true" role="tab">General</a>
                                </li>
                                {/*end:::Tab item*/}
                                {/*begin:::Tab item*/}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_ecommerce_add_product_advanced" aria-selected="false" role="tab" tabIndex={-1}>Advanced</a>
                                </li>
                                {/*end:::Tab item*/}
                            </ul>
                            {/*end:::Tabs*/}
                            {/*begin::Tab content*/}
                            <div className="tab-content">
                                {/*begin::Tab pane*/}
                                <div className="tab-pane fade active show" id="kt_ecommerce_add_product_general" role="tab-panel">
                                    {productDropdown.data ? (
                                        <TabGeneral
                                            optData={generalData.generalTab}
                                            defaultData={generalData.generalDefault}
                                            TabGeneralDrop={generalTabChange}
                                        />) : null}

                                </div>
                                {/*end::Tab pane*/}
                                {/*begin::Tab pane*/}
                                <div className="tab-pane fade" id="kt_ecommerce_add_product_advanced" role="tab-panel">

                                    <TabAdvance
                                        optData={generalData.advanceTab}
                                        defaultAdvance={generalData.advanceDefault}
                                        TabAdvanceDrop={advanceTabChange}
                                    />
                                </div>
                                {/*end::Tab pane*/}
                            </div>
                            {/*end::Tab content*/}
                            <div className="d-flex justify-content-end">
                                {/*begin::Button*/}
                                <a href="products.html" id="kt_ecommerce_add_product_cancel" className="btn btn-light me-5">
                                    Cancel
                                </a>
                                {/*end::Button*/}
                                {/*begin::Button*/}
                                <button type="submit" id="kt_ecommerce_add_product_submit" className="btn btn-primary">
                                    <span className="indicator-label">
                                        Save Changes
                                    </span>
                                    <span className="indicator-progress">
                                        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>
                                </button>
                                {/*end::Button*/}
                            </div>
                        </div>
                        {/*end::Main column*/}
                    </form>
                    {/*end::Form*/}					</div>
                {/*end::Post*/}
            </div>
        </>
    );
}