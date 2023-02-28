import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
export default function Header() {
    const { data, status } = useSession();
    // if (data == null) {

    // }
    console.log('session header:', data)
    return (
        <>
            {/*begin::Header*/}
            <div id="kt_header" className="header">
                {/*begin::Header top*/}
                <div className="header-top d-flex align-items-stretch flex-grow-1">
                    {/*begin::Container*/}
                    <div className="d-flex  container-xxl  align-items-stretch">
                        {/*begin::Brand*/}
                        <div className="d-flex align-items-center align-items-lg-stretch me-5 flex-row-fluid">
                            {/*begin::Heaeder navs toggle*/}
                            <button
                                className="d-lg-none btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px ms-n2 me-2"
                                id="kt_header_navs_toggle"
                            >
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                                <span className="svg-icon svg-icon-2">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            opacity="0.3"
                                            d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </button>
                            {/*end::Heaeder navs toggle*/}
                            {/*begin::Logo*/}
                            <a href="/" className="d-flex align-items-center">

                                <Image
                                    alt="Logo"
                                    src={`/assets/media/logos/demo20.svg`}
                                    className="h-25px h-lg-30px"
                                    width={70}
                                    height={70}
                                />
                            </a>
                            {/*end::Logo*/}
                            {/*begin::Tabs wrapper*/}
                            <div
                                className="align-self-end overflow-auto"
                                id="kt_brand_tabs"
                            >
                                {/*begin::Header tabs wrapper*/}
                                <div
                                    className="header-tabs overflow-auto mx-4 ms-lg-10 mb-5 mb-lg-0"
                                    id="kt_header_tabs"
                                    data-kt-swapper="true"
                                    data-kt-swapper-mode="prepend"
                                    data-kt-swapper-parent="{default: '#kt_header_navs_wrapper', lg: '#kt_brand_tabs'}"
                                >
                                    {/*begin::Header tabs*/}
                                    <ul className="nav flex-nowrap text-nowrap">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                href="#kt_header_navs_tab_1"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                href="#kt_header_navs_tab_2"
                                            >
                                                Forms
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                href="#kt_header_navs_tab_3"
                                            >
                                                Applications
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                href="#kt_header_navs_tab_4"
                                            >
                                                Reports
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                href="#kt_header_navs_tab_5"
                                            >
                                                Help
                                            </a>
                                        </li>
                                    </ul>
                                    {/*begin::Header tabs*/}
                                </div>
                                {/*end::Header tabs wrapper*/}
                            </div>
                            {/*end::Tabs wrapper*/}
                        </div>
                        {/*end::Brand*/}
                        {/*begin::Topbar*/}
                        <div className="d-flex align-items-center flex-row-auto">
                            {/*begin::Search*/}
                            <div className="d-flex align-items-stretch ms-1">
                                {/*begin::Search*/}
                                <div
                                    id="kt_header_search"
                                    className="header-search d-flex align-items-stretch"
                                    data-kt-search-keypress="true"
                                    data-kt-search-min-length={2}
                                    data-kt-search-enter="enter"
                                    data-kt-search-layout="menu"
                                    data-kt-menu-trigger="auto"
                                    data-kt-menu-overflow="false"
                                    data-kt-menu-permanent="true"
                                    data-kt-menu-placement="bottom-end"
                                >
                                    {/*begin::Search toggle*/}
                                    <div
                                        className="d-flex align-items-center"
                                        data-kt-search-element="toggle"
                                        id="kt_header_search_toggle"
                                    >
                                        <div className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px">
                                            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        opacity="0.5"
                                                        x="17.0365"
                                                        y="15.1223"
                                                        width="8.15546"
                                                        height={2}
                                                        rx={1}
                                                        transform="rotate(45 17.0365 15.1223)"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </div>
                                    </div>
                                    {/*end::Search toggle*/}
                                    {/*begin::Menu*/}
                                    <div
                                        data-kt-search-element="content"
                                        className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
                                    >
                                        {/*begin::Wrapper*/}
                                        <div data-kt-search-element="wrapper">
                                            {/*begin::Form*/}
                                            <form
                                                data-kt-search-element="form"
                                                className="w-100 position-relative mb-3"
                                                autoComplete="off"
                                            >
                                                {/*begin::Icon*/}
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            opacity="0.5"
                                                            x="17.0365"
                                                            y="15.1223"
                                                            width="8.15546"
                                                            height={2}
                                                            rx={1}
                                                            transform="rotate(45 17.0365 15.1223)"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                                {/*end::Icon*/}
                                                {/*begin::Input*/}
                                                <input
                                                    type="text"
                                                    className="search-input  form-control form-control-flush ps-10"
                                                    name="search"
                                                    defaultValue=""
                                                    placeholder="Search..."
                                                    data-kt-search-element="input"
                                                />
                                                {/*end::Input*/}
                                                {/*begin::Spinner*/}
                                                <span
                                                    className="search-spinner  position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                                                    data-kt-search-element="spinner"
                                                >
                                                    <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                                                </span>
                                                {/*end::Spinner*/}
                                                {/*begin::Reset*/}
                                                <span
                                                    className="search-reset  btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                                                    data-kt-search-element="clear"
                                                >
                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                opacity="0.5"
                                                                x={6}
                                                                y="17.3137"
                                                                width={16}
                                                                height={2}
                                                                rx={1}
                                                                transform="rotate(-45 6 17.3137)"
                                                                fill="currentColor"
                                                            />
                                                            <rect
                                                                x="7.41422"
                                                                y={6}
                                                                width={16}
                                                                height={2}
                                                                rx={1}
                                                                transform="rotate(45 7.41422 6)"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                                {/*end::Reset*/}
                                                {/*begin::Toolbar*/}
                                                <div
                                                    className="position-absolute top-50 end-0 translate-middle-y"
                                                    data-kt-search-element="toolbar"
                                                >
                                                    {/*begin::Preferences toggle*/}
                                                    <div
                                                        data-kt-search-element="preferences-show"
                                                        className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                                                        data-bs-toggle="tooltip"
                                                        title="Show search preferences"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                                                        <span className="svg-icon svg-icon-1">
                                                            <svg
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Preferences toggle*/}
                                                    {/*begin::Advanced search toggle*/}
                                                    <div
                                                        data-kt-search-element="advanced-options-form-show"
                                                        className="btn btn-icon w-20px btn-sm btn-active-color-primary"
                                                        data-bs-toggle="tooltip"
                                                        title="Show more search options"
                                                    >
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </div>
                                                    {/*end::Advanced search toggle*/}
                                                </div>
                                                {/*end::Toolbar*/}
                                            </form>
                                            {/*end::Form*/}
                                            {/*begin::Separator*/}
                                            <div className="separator border-gray-200 mb-6" />
                                            {/*end::Separator*/}
                                            {/*begin::Recently viewed*/}
                                            <div
                                                data-kt-search-element="results"
                                                className="d-none"
                                            >
                                                {/*begin::Items*/}
                                                <div className="scroll-y mh-200px mh-lg-350px">
                                                    {/*begin::Category title*/}
                                                    <h3
                                                        className="fs-5 text-muted m-0  pb-5"
                                                        data-kt-search-element="category-title"
                                                    >
                                                        Users{" "}
                                                    </h3>
                                                    {/*end::Category title*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <Image
                                                                alt="Logo"
                                                                src={`/assets/media/avatars/300-6.jpg`}

                                                                width={50}
                                                                height={50}
                                                            />


                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Karina Clark
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Marketing Manager
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <Image src={`/assets/media/avatars/300-2.jpg`}
                                                                alt={`avatars`}
                                                                width={50}
                                                                height={50}
                                                            />
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Olivia Bold
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Software Engineer
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img
                                                                src={`/assets/media/avatars/300-9.jpg`}
                                                                alt="user"
                                                            />
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Ana Clark
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                UI/UX Designer
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img
                                                                src={`/assets/media/avatars/300-14.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Nick Pitola
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Art Director
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img
                                                                src={`/assets/media/avatars/300-11.jpg`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Edward Kulnic
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                System Administrator
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Category title*/}
                                                    <h3
                                                        className="fs-5 text-muted m-0 pt-5 pb-5"
                                                        data-kt-search-element="category-title"
                                                    >
                                                        Customers{" "}
                                                    </h3>
                                                    {/*end::Category title*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img
                                                                    className="w-20px h-20px"
                                                                    src={`/assets/media/svg/brand-logos/volicity-9.svg`}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Company Rbranding
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                UI Design
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img
                                                                    className="w-20px h-20px"
                                                                    src={`/assets/media/svg/brand-logos/tvit.svg`}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Company Re-branding
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Web Development
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img
                                                                    className="w-20px h-20px"
                                                                    src={`/assets/media/svg/misc/infography.svg`}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Business Analytics App
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Administration
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img
                                                                    className="w-20px h-20px"
                                                                    src={`/assets/media/svg/brand-logos/leaf.svg`}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                EcoLeaf App Launch
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Marketing
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img
                                                                    className="w-20px h-20px"
                                                                    src={`/assets/media/svg/brand-logos/tower.svg`}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">
                                                                Tower Group Website
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                Google Adwords
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Category title*/}
                                                    <h3
                                                        className="fs-5 text-muted m-0 pt-5 pb-5"
                                                        data-kt-search-element="category-title"
                                                    >
                                                        Projects{" "}
                                                    </h3>
                                                    {/*end::Category title*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={7}
                                                                            y={17}
                                                                            width={6}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={7}
                                                                            y={12}
                                                                            width={10}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={7}
                                                                            y={7}
                                                                            width={6}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">
                                                                Si-Fi Project by AU Themes
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                #45670
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            x={8}
                                                                            y={9}
                                                                            width={3}
                                                                            height={10}
                                                                            rx="1.5"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            opacity="0.5"
                                                                            x={13}
                                                                            y={5}
                                                                            width={3}
                                                                            height={14}
                                                                            rx="1.5"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={18}
                                                                            y={11}
                                                                            width={3}
                                                                            height={8}
                                                                            rx="1.5"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={3}
                                                                            y={13}
                                                                            width={3}
                                                                            height={6}
                                                                            rx="1.5"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">
                                                                Shopix Mobile App Planning
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                #45690
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={12}
                                                                            width={7}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={7}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">
                                                                Finance Monitoring SAAS Discussion
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                #21090
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <a
                                                        href="#"
                                                        className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                                    >
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={18}
                                                                        height={18}
                                                                        viewBox="0 0 18 18"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={7}
                                                                            y={6}
                                                                            width={4}
                                                                            height={4}
                                                                            rx={2}
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">
                                                                Dashboard Analitics Launch
                                                            </span>
                                                            <span className="fs-7 fw-semibold text-muted">
                                                                #34560
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </a>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Items*/}
                                            </div>
                                            {/*end::Recently viewed*/}
                                            {/*begin::Recently viewed*/}
                                            <div className="mb-5" data-kt-search-element="main">
                                                {/*begin::Heading*/}
                                                <div className="d-flex flex-stack fw-semibold mb-4">
                                                    {/*begin::Label*/}
                                                    <span className="text-muted fs-6 me-2">
                                                        Recently Searched:
                                                    </span>
                                                    {/*end::Label*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Items*/}
                                                <div className="scroll-y mh-200px mh-lg-325px">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/electronics/elc004.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M15 17H9V20H15V17Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                BoomApp by Keenthemes
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #45789
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                "Kept API Project Meeting
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #84050
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                "KPI Monitoring App Launch
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #84250
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20 8L12.5 5L5 14V19H20V8Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Project Reference FAQ
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #67945
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                "FitPro App Development
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #84250
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Shopix Mobile App
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #45690
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20 8L12.5 5L5 14V19H20V8Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Title*/}
                                                        <div className="d-flex flex-column">
                                                            <a
                                                                href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                "Landing UI Design" Launch
                                                            </a>
                                                            <span className="fs-7 text-muted fw-semibold">
                                                                #24005
                                                            </span>
                                                        </div>
                                                        {/*end::Title*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Items*/}
                                            </div>
                                            {/*end::Recently viewed*/}
                                            {/*begin::Empty*/}
                                            <div
                                                data-kt-search-element="empty"
                                                className="text-center d-none"
                                            >
                                                {/*begin::Icon*/}
                                                <div className="pt-10 pb-10">
                                                    {/*begin::Svg Icon | path: icons/duotune/files/fil024.svg*/}
                                                    <span className="svg-icon svg-icon-4x opacity-50">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                opacity="0.3"
                                                                d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                                                fill="currentColor"
                                                            />
                                                            <path
                                                                d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                                                fill="currentColor"
                                                            />
                                                            <rect
                                                                x="13.6993"
                                                                y="13.6656"
                                                                width="4.42828"
                                                                height="1.73089"
                                                                rx="0.865447"
                                                                transform="rotate(45 13.6993 13.6656)"
                                                                fill="currentColor"
                                                            />
                                                            <path
                                                                d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </div>
                                                {/*end::Icon*/}
                                                {/*begin::Message*/}
                                                <div className="pb-15 fw-semibold">
                                                    <h3 className="text-gray-600 fs-5 mb-2">
                                                        No result found
                                                    </h3>
                                                    <div className="text-muted fs-7">
                                                        Please try again with a different query
                                                    </div>
                                                </div>
                                                {/*end::Message*/}
                                            </div>
                                            {/*end::Empty*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                        {/*begin::Preferences*/}
                                        <form
                                            data-kt-search-element="advanced-options-form"
                                            className="pt-1 d-none"
                                        >
                                            {/*begin::Heading*/}
                                            <h3 className="fw-semibold text-dark mb-7">
                                                Advanced Search
                                            </h3>
                                            {/*end::Heading*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-5">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm form-control-solid"
                                                    placeholder="Contains the word"
                                                    name="query"
                                                />
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-5">
                                                {/*begin::Radio group*/}
                                                <div className="nav-group nav-group-fluid">
                                                    {/*begin::Option*/}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="type"
                                                            defaultValue="has"
                                                            defaultChecked="checked"
                                                        />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                            All
                                                        </span>
                                                    </label>
                                                    {/*end::Option*/}
                                                    {/*begin::Option*/}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="type"
                                                            defaultValue="users"
                                                        />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                            Users
                                                        </span>
                                                    </label>
                                                    {/*end::Option*/}
                                                    {/*begin::Option*/}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="type"
                                                            defaultValue="orders"
                                                        />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                            Orders
                                                        </span>
                                                    </label>
                                                    {/*end::Option*/}
                                                    {/*begin::Option*/}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="type"
                                                            defaultValue="projects"
                                                        />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                            Projects
                                                        </span>
                                                    </label>
                                                    {/*end::Option*/}
                                                </div>
                                                {/*end::Radio group*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-5">
                                                <input
                                                    type="text"
                                                    name="assignedto"
                                                    className="form-control form-control-sm form-control-solid"
                                                    placeholder="Assigned to"
                                                    defaultValue=""
                                                />
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-5">
                                                <input
                                                    type="text"
                                                    name="collaborators"
                                                    className="form-control form-control-sm form-control-solid"
                                                    placeholder="Collaborators"
                                                    defaultValue=""
                                                />
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-5">
                                                {/*begin::Radio group*/}
                                                <div className="nav-group nav-group-fluid">
                                                    {/*begin::Option*/}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="attachment"
                                                            defaultValue="has"
                                                            defaultChecked="checked"
                                                        />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                            Has attachment
                                                        </span>
                                                    </label>
                                                    {/*end::Option*/}
                                                    {/*begin::Option*/}
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="attachment"
                                                            defaultValue="any"
                                                        />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                            Any
                                                        </span>
                                                    </label>
                                                    {/*end::Option*/}
                                                </div>
                                                {/*end::Radio group*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-5">
                                                <select
                                                    name="timezone"
                                                    aria-label="Select a Timezone"
                                                    data-control="select2"
                                                    data-placeholder="date_period"
                                                    className="form-select form-select-sm form-select-solid"
                                                >
                                                    <option value="next">Within the next</option>
                                                    <option value="last">Within the last</option>
                                                    <option value="between">Between</option>
                                                    <option value="on">On</option>
                                                </select>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="row mb-8">
                                                {/*begin::Col*/}
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        name="date_number"
                                                        className="form-control form-control-sm form-control-solid"
                                                        placeholder="Lenght"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                {/*end::Col*/}
                                                {/*begin::Col*/}
                                                <div className="col-6">
                                                    <select
                                                        name="date_typer"
                                                        aria-label="Select a Timezone"
                                                        data-control="select2"
                                                        data-placeholder="Period"
                                                        className="form-select form-select-sm form-select-solid"
                                                    >
                                                        <option value="days">Days</option>
                                                        <option value="weeks">Weeks</option>
                                                        <option value="months">Months</option>
                                                        <option value="years">Years</option>
                                                    </select>
                                                </div>
                                                {/*end::Col*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Actions*/}
                                            <div className="d-flex justify-content-end">
                                                <button
                                                    type="reset"
                                                    className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                                    data-kt-search-element="advanced-options-form-cancel"
                                                >
                                                    Cancel
                                                </button>
                                                <a
                                                    href="pages/search/horizontal.html"
                                                    className="btn btn-sm fw-bold btn-primary"
                                                    data-kt-search-element="advanced-options-form-search"
                                                >
                                                    Search
                                                </a>
                                            </div>
                                            {/*end::Actions*/}
                                        </form>
                                        {/*end::Preferences*/}
                                        {/*begin::Preferences*/}
                                        <form
                                            data-kt-search-element="preferences"
                                            className="pt-1 d-none"
                                        >
                                            {/*begin::Heading*/}
                                            <h3 className="fw-semibold text-dark mb-7">
                                                Search Preferences
                                            </h3>
                                            {/*end::Heading*/}
                                            {/*begin::Input group*/}
                                            <div className="pb-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                        Projects
                                                    </span>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                        defaultChecked="checked"
                                                    />
                                                </label>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                        Targets
                                                    </span>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                        defaultChecked="checked"
                                                    />
                                                </label>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                        Affiliate Programs
                                                    </span>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                    />
                                                </label>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                        Referrals
                                                    </span>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                        defaultChecked="checked"
                                                    />
                                                </label>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                        Users
                                                    </span>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                    />
                                                </label>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Actions*/}
                                            <div className="d-flex justify-content-end pt-7">
                                                <button
                                                    type="reset"
                                                    className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                                    data-kt-search-element="preferences-dismiss"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-sm fw-bold btn-primary"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                            {/*end::Actions*/}
                                        </form>
                                        {/*end::Preferences*/}
                                    </div>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Search*/}
                            </div>
                            {/*end::Search*/}
                            {/*begin::Activities*/}
                            <div className="d-flex align-items-center ms-1">
                                {/*begin::Drawer toggle*/}
                                <div
                                    className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px"
                                    id="kt_activities_toggle"
                                >
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x={8}
                                                y={9}
                                                width={3}
                                                height={10}
                                                rx="1.5"
                                                fill="currentColor"
                                            />
                                            <rect
                                                opacity="0.5"
                                                x={13}
                                                y={5}
                                                width={3}
                                                height={14}
                                                rx="1.5"
                                                fill="currentColor"
                                            />
                                            <rect
                                                x={18}
                                                y={11}
                                                width={3}
                                                height={8}
                                                rx="1.5"
                                                fill="currentColor"
                                            />
                                            <rect
                                                x={3}
                                                y={13}
                                                width={3}
                                                height={6}
                                                rx="1.5"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                </div>
                                {/*end::Drawer toggle*/}
                            </div>
                            {/*end::Activities*/}
                            {/*begin::Chat*/}
                            <div className="d-flex align-items-center ms-1">
                                {/*begin::Menu wrapper*/}
                                <div
                                    className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px position-relative"
                                    id="kt_drawer_chat_toggle"
                                >
                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                    <span className="svg-icon svg-icon-2">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.3"
                                                d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                fill="currentColor"
                                            />
                                            <rect
                                                x={6}
                                                y={12}
                                                width={7}
                                                height={2}
                                                rx={1}
                                                fill="currentColor"
                                            />
                                            <rect
                                                x={6}
                                                y={7}
                                                width={12}
                                                height={2}
                                                rx={1}
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    {/*begin::Notification animation*/}
                                    <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                                    {/*end::Notification animation*/}
                                </div>
                                {/*end::Menu wrapper*/}
                            </div>
                            {/*end::Chat*/}
                            {/*begin::Quick links*/}
                            <div className="d-flex align-items-center ms-1">
                                {/*begin::Menu wrapper*/}
                                <div
                                    className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-attach="parent"
                                    data-kt-menu-placement="bottom-end"
                                >
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                    <span className="svg-icon svg-icon-2">
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
                                </div>
                                {/*begin::Menu*/}
                                <div
                                    className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
                                    data-kt-menu="true"
                                >
                                    {/*begin::Heading*/}
                                    <div
                                        className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                                        style={{
                                            backgroundImage:
                                                'url(assets/media/misc/menu-header-bg.jpg)'
                                        }}
                                    >
                                        {/*begin::Title*/}
                                        <h3 className="text-white fw-semibold mb-3">
                                            Quick Links
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Status*/}
                                        <span className="badge bg-primary text-inverse-primary py-2 px-3">
                                            25 pending tasks
                                        </span>
                                        {/*end::Status*/}
                                    </div>
                                    {/*end::Heading*/}
                                    {/*begin:Nav*/}
                                    <div className="row g-0">
                                        {/*begin:Item*/}
                                        <div className="col-6">
                                            <a
                                                href="apps/projects/budget.html"
                                                className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/finance/fin009.svg*/}
                                                <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            opacity="0.3"
                                                            d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}{" "}
                                                <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                                    Accounting
                                                </span>
                                                <span className="fs-7 text-gray-400">eCommerce</span>
                                            </a>
                                        </div>
                                        {/*end:Item*/}
                                        {/*begin:Item*/}
                                        <div className="col-6">
                                            <a
                                                href="apps/projects/settings.html"
                                                className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                                <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            opacity="0.3"
                                                            d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}{" "}
                                                <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                                    Administration
                                                </span>
                                                <span className="fs-7 text-gray-400">Console</span>
                                            </a>
                                        </div>
                                        {/*end:Item*/}
                                        {/*begin:Item*/}
                                        <div className="col-6">
                                            <a
                                                href="apps/projects/list.html"
                                                className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                                <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            opacity="0.3"
                                                            d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}{" "}
                                                <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                                    Projects
                                                </span>
                                                <span className="fs-7 text-gray-400">
                                                    Pending Tasks
                                                </span>
                                            </a>
                                        </div>
                                        {/*end:Item*/}
                                        {/*begin:Item*/}
                                        <div className="col-6">
                                            <a
                                                href="apps/projects/users.html"
                                                className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                                            >
                                                {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            opacity="0.3"
                                                            d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}{" "}
                                                <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                                    Customers
                                                </span>
                                                <span className="fs-7 text-gray-400">
                                                    Latest cases
                                                </span>
                                            </a>
                                        </div>
                                        {/*end:Item*/}
                                    </div>
                                    {/*end:Nav*/}
                                    {/*begin::View more*/}
                                    <div className="py-2 text-center border-top">
                                        <a
                                            href="pages/user-profile/activity.html"
                                            className="btn btn-color-gray-600 btn-active-color-primary"
                                        >
                                            View All
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                            <span className="svg-icon svg-icon-5">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        opacity="0.5"
                                                        x={18}
                                                        y={13}
                                                        width={13}
                                                        height={2}
                                                        rx={1}
                                                        transform="rotate(-180 18 13)"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </a>
                                    </div>
                                    {/*end::View more*/}
                                </div>
                                {/*end::Menu*/}
                                {/*end::Menu wrapper*/}
                            </div>
                            {/*begin::Quick links*/}
                            {/*begin::Theme mode*/}
                            <div className="d-flex align-items-center ms-1">
                                {/*begin::Menu toggle*/}
                                <a
                                    href="#"
                                    className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px"
                                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                    data-kt-menu-attach="parent"
                                    data-kt-menu-placement="bottom-end"
                                >
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                                    <span className="svg-icon theme-light-show svg-icon-2">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                                    <span className="svg-icon theme-dark-show svg-icon-2">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                </a>
                                {/*begin::Menu toggle*/}
                                {/*begin::Menu*/}
                                <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                                    data-kt-menu="true"
                                    data-kt-element="theme-mode-menu"
                                >
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a
                                            href="#"
                                            className="menu-link px-3 py-2"
                                            data-kt-element="mode"
                                            data-kt-value="light"
                                        >
                                            <span className="menu-icon" data-kt-element="icon">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                                                <span className="svg-icon svg-icon-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                            </span>
                                            <span className="menu-title">Light</span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a
                                            href="#"
                                            className="menu-link px-3 py-2"
                                            data-kt-element="mode"
                                            data-kt-value="dark"
                                        >
                                            <span className="menu-icon" data-kt-element="icon">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                                                <span className="svg-icon svg-icon-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                            </span>
                                            <span className="menu-title">Dark</span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3 my-0">
                                        <a
                                            href="#"
                                            className="menu-link px-3 py-2"
                                            data-kt-element="mode"
                                            data-kt-value="system"
                                        >
                                            <span className="menu-icon" data-kt-element="icon">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen062.svg*/}
                                                <span className="svg-icon svg-icon-3">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                            </span>
                                            <span className="menu-title">System</span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                </div>
                                {/*end::Menu*/}
                            </div>
                            {/*end::Theme mode*/}
                            {/*begin::User*/}
                            <div
                                className="d-flex align-items-center ms-1"
                                id="kt_header_user_menu_toggle"
                            >
                                {/*begin::User info*/}
                                <div
                                    className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-attach="parent"
                                    data-kt-menu-placement="bottom-end"
                                >
                                    {/*begin::Name*/}
                                    <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
                                        <span className="text-white opacity-75 fs-8 fw-semibold lh-1 mb-1">
                                            Max
                                        </span>
                                        <span className="text-white fs-8 fw-bold lh-1">
                                            UX Designer
                                        </span>
                                    </div>
                                    {/*end::Name*/}
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-30px symbol-md-40px">
                                        <img src={`/assets/media/avatars/300-1.jpg`} alt="image" />
                                    </div>
                                    {/*end::Symbol*/}
                                </div>
                                {/*end::User info*/}
                                {/*begin::User account menu*/}
                                <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                                    data-kt-menu="true"
                                >
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <div className="menu-content d-flex align-items-center px-3">
                                            {/*begin::Avatar*/}
                                            <div className="symbol symbol-50px me-5">
                                                <img
                                                    alt="Logo"
                                                    src={`/assets/media/avatars/300-1.jpg`}
                                                />
                                            </div>
                                            {/*end::Avatar*/}
                                            {/*begin::Username*/}
                                            <div className="d-flex flex-column">
                                                <div className="fw-bold d-flex align-items-center fs-5">
                                                    Max Smith{" "}
                                                    <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                                                        Pro
                                                    </span>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="fw-semibold text-muted text-hover-primary fs-7"
                                                >
                                                    max@kt.com{" "}
                                                </a>
                                            </div>
                                            {/*end::Username*/}
                                        </div>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator my-2" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-5">
                                        <a
                                            href="account/overview.html"
                                            className="menu-link px-5"
                                        >
                                            My Profile
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-5">
                                        <a
                                            href="apps/projects/list.html"
                                            className="menu-link px-5"
                                        >
                                            <span className="menu-text">My Projects</span>
                                            <span className="menu-badge">
                                                <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                                                    3
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div
                                        className="menu-item px-5"
                                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                        data-kt-menu-placement="left-start"
                                        data-kt-menu-offset="-15px, 0"
                                    >
                                        <a href="#" className="menu-link px-5">
                                            <span className="menu-title">My Subscription</span>
                                            <span className="menu-arrow" />
                                        </a>
                                        {/*begin::Menu sub*/}
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a
                                                    href="account/referrals.html"
                                                    className="menu-link px-5"
                                                >
                                                    Referrals
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a
                                                    href="account/billing.html"
                                                    className="menu-link px-5"
                                                >
                                                    Billing
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a
                                                    href="account/statements.html"
                                                    className="menu-link px-5"
                                                >
                                                    Payments
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a
                                                    href="account/statements.html"
                                                    className="menu-link d-flex flex-stack px-5"
                                                >
                                                    Statements
                                                    <i
                                                        className="fas fa-exclamation-circle ms-2 fs-7"
                                                        data-bs-toggle="tooltip"
                                                        title="View your statements"
                                                    />
                                                </a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator my-2" />
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3">
                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input
                                                            className="form-check-input w-30px h-20px"
                                                            type="checkbox"
                                                            defaultValue={1}
                                                            defaultChecked="checked"
                                                            name="notifications"
                                                        />
                                                        <span className="form-check-label text-muted fs-7">
                                                            Notifications
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu sub*/}
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-5">
                                        <a
                                            href="account/statements.html"
                                            className="menu-link px-5"
                                        >
                                            My Statements
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator my-2" />
                                    {/*end::Menu separator*/}

                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-5 my-1">
                                        <a
                                            href="account/settings.html"
                                            className="menu-link px-5"
                                        >
                                            Account Settings
                                        </a>
                                    </div>
                                    {/*end::Menu item*/}
                                    {/*begin::Menu item*/}
                                    <div className="menu-item px-5">
                                        <Link href={''} onClick={() => signOut()} className="menu-link px-5"> Sign Out</Link>

                                    </div>
                                    {/*end::Menu item*/}
                                </div>
                                {/*end::User account menu*/}
                            </div>
                            {/*end::User */}
                            {/*begin::Heaeder menu toggle*/}
                            {/*end::Heaeder menu toggle*/}
                        </div>
                        {/*end::Topbar*/}
                    </div>
                    {/*end::Container*/}
                </div>
                {/*end::Header top*/}
                {/*begin::Header navs*/}
                <div
                    className="header-navs d-flex align-items-stretch flex-stack h-lg-70px w-100 py-5 py-lg-0"
                    id="kt_header_navs"
                    data-kt-drawer="true"
                    data-kt-drawer-name="header-menu"
                    data-kt-drawer-activate="{default: true, lg: false}"
                    data-kt-drawer-overlay="true"
                    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                    data-kt-drawer-direction="start"
                    data-kt-drawer-toggle="#kt_header_navs_toggle"
                    data-kt-swapper="true"
                    data-kt-swapper-mode="append"
                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header'}"
                >
                    {/*begin::Container*/}
                    <div className="d-lg-flex  container-xxl  w-100">
                        {/*begin::Wrapper*/}
                        <div
                            className="d-lg-flex flex-column justify-content-lg-center w-100"
                            id="kt_header_navs_wrapper"
                        >
                            {/*begin::Header tab content*/}
                            <div
                                className="tab-content"
                                data-kt-scroll="true"
                                data-kt-scroll-activate="{default: true, lg: false}"
                                data-kt-scroll-height="auto"
                                data-kt-scroll-offset="70px"
                            >
                                {/*begin::Tab panel*/}
                                <div
                                    className="tab-pane fade active show"
                                    id="kt_header_navs_tab_1"
                                >
                                    {/*begin::Menu wrapper*/}
                                    <div className="header-menu flex-column align-items-stretch flex-lg-row">
                                        {/*begin::Menu*/}
                                        <div
                                            className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-title-gray-700 menu-state-primary menu-arrow-gray-400 fw-semibold align-items-stretch flex-grow-1 px-2 px-lg-0"
                                            id="#kt_header_menu"
                                            data-kt-menu="true"
                                        >
                                            {/*begin:Menu item*/}
                                            <div
                                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                                data-kt-menu-placement="bottom-start"
                                                className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                                            >
                                                {/*begin:Menu link*/}
                                                <span className="menu-link py-3">
                                                    <span className="menu-title">Dashboards</span>
                                                    <span className="menu-arrow d-lg-none" />
                                                </span>
                                                {/*end:Menu link*/}
                                                {/*begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                                                    {/*begin:Dashboards menu*/}
                                                    <div
                                                        className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                                                        data-kt-menu-dismiss="true"
                                                    >
                                                        {/*begin:Row*/}
                                                        <div className="row">
                                                            {/*begin:Col*/}
                                                            <div className="col-lg-8 mb-3 mb-lg-0  py-3 px-3 py-lg-6 px-lg-6">
                                                                {/*begin:Row*/}
                                                                <div className="row">
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="index.html"
                                                                                className="menu-link active"
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                    <span className="svg-icon svg-icon-primary svg-icon-1">
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
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        Default
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Reports &amp; statistics
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/ecommerce.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                                    <span className="svg-icon svg-icon-danger svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        eCommerce
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Sales reports
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/projects.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs045.svg*/}
                                                                                    <span className="svg-icon svg-icon-info svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                d="M2 11.7127L10 14.1127L22 11.7127L14 9.31274L2 11.7127Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M20.9 7.91274L2 11.7127V6.81275C2 6.11275 2.50001 5.61274 3.10001 5.51274L20.6 2.01274C21.3 1.91274 22 2.41273 22 3.11273V6.61273C22 7.21273 21.5 7.81274 20.9 7.91274ZM22 16.6127V11.7127L3.10001 15.5127C2.50001 15.6127 2 16.2127 2 16.8127V20.3127C2 21.0127 2.69999 21.6128 3.39999 21.4128L20.9 17.9128C21.5 17.8128 22 17.2127 22 16.6127Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        Projects
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Tasts, graphs &amp; charts
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/online-courses.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/art/art002.svg*/}
                                                                                    <span className="svg-icon svg-icon-success svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={25}
                                                                                            viewBox="0 0 24 25"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        Online Courses
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Student progress
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/marketing.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                                                                                    <span className="svg-icon svg-icon-dark svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        Marketing
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Campaings &amp; conversions
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/bidding.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                                    <span className="svg-icon svg-icon-warning svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        Bidding
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Campaings &amp; conversions
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/pos.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs043.svg*/}
                                                                                    <span className="svg-icon svg-icon-danger svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M22 8H8L12 4H19C19.6 4 20.2 4.39999 20.5 4.89999L22 8ZM3.5 19.1C3.8 19.7 4.4 20 5 20H12L16 16H2L3.5 19.1ZM19.1 20.5C19.7 20.2 20 19.6 20 19V12L16 8V22L19.1 20.5ZM4.9 3.5C4.3 3.8 4 4.4 4 5V12L8 16V2L4.9 3.5Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                d="M22 8L20 12L16 8H22ZM8 16L4 12L2 16H8ZM16 16L12 20L16 22V16ZM8 8L12 4L8 2V8Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        POS System
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Campaings &amp; conversions
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="dashboards/call-center.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com004.svg*/}
                                                                                    <span className="svg-icon svg-icon-primary svg-icon-1">
                                                                                        <svg
                                                                                            width={24}
                                                                                            height={24}
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                opacity="0.3"
                                                                                                d="M14 3V20H2V3C2 2.4 2.4 2 3 2H13C13.6 2 14 2.4 14 3ZM11 13V11C11 9.7 10.2 8.59995 9 8.19995V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V8.19995C5.8 8.59995 5 9.7 5 11V13C5 13.6 4.6 14 4 14V15C4 15.6 4.4 16 5 16H11C11.6 16 12 15.6 12 15V14C11.4 14 11 13.6 11 13Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                            <path
                                                                                                d="M2 20H14V21C14 21.6 13.6 22 13 22H3C2.4 22 2 21.6 2 21V20ZM9 3V2H7V3C7 3.6 7.4 4 8 4C8.6 4 9 3.6 9 3ZM6.5 16C6.5 16.8 7.2 17.5 8 17.5C8.8 17.5 9.5 16.8 9.5 16H6.5ZM21.7 12C21.7 11.4 21.3 11 20.7 11H17.6C17 11 16.6 11.4 16.6 12C16.6 12.6 17 13 17.6 13H20.7C21.2 13 21.7 12.6 21.7 12ZM17 8C16.6 8 16.2 7.80002 16.1 7.40002C15.9 6.90002 16.1 6.29998 16.6 6.09998L19.1 5C19.6 4.8 20.2 5 20.4 5.5C20.6 6 20.4 6.60005 19.9 6.80005L17.4 7.90002C17.3 8.00002 17.1 8 17 8ZM19.5 19.1C19.4 19.1 19.2 19.1 19.1 19L16.6 17.9C16.1 17.7 15.9 17.1 16.1 16.6C16.3 16.1 16.9 15.9 17.4 16.1L19.9 17.2C20.4 17.4 20.6 18 20.4 18.5C20.2 18.9 19.9 19.1 19.5 19.1Z"
                                                                                                fill="currentColor"
                                                                                            />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </span>
                                                                                <span className="d-flex flex-column">
                                                                                    <span className="fs-6 fw-bold text-gray-800">
                                                                                        Call Center
                                                                                    </span>
                                                                                    <span className="fs-7 fw-semibold text-muted">
                                                                                        Campaings &amp; conversions
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                </div>
                                                                {/*end:Row*/}
                                                                <div className="separator separator-dashed mx-5 my-5"></div>
                                                                {/*begin:Landing*/}
                                                                <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                                                                    <div className="d-flex flex-column me-5">
                                                                        <div className="fs-6 fw-bold text-gray-800">
                                                                            Landing Page Template
                                                                        </div>
                                                                        <div className="fs-7 fw-semibold text-muted">
                                                                            Onpe page landing template with pricing
                                                                            &amp; others
                                                                        </div>
                                                                    </div>
                                                                    <a
                                                                        href="landing.html"
                                                                        className="btn btn-sm btn-primary fw-bold"
                                                                    >
                                                                        Explore
                                                                    </a>
                                                                </div>
                                                                {/*end:Landing*/}
                                                            </div>
                                                            {/*end:Col*/}
                                                            {/*begin:Col*/}
                                                            <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                                                {/*begin:Heading*/}
                                                                <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                                                                    More Dashboards
                                                                </h4>
                                                                {/*end:Heading*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/logistics.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Logistics{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/website-analytics.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Website Analytics{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/finance-performance.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Finance Performance{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/store-analytics.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Store Analytics{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/social.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Social{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/delivery.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Delivery{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/crypto.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Crypto{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/school.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            School{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        href="dashboards/podcast.html"
                                                                        className="menu-link py-2 "
                                                                    >
                                                                        <span className="menu-title">
                                                                            Podcast{" "}
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Col*/}
                                                        </div>
                                                        {/*end:Row*/}
                                                    </div>
                                                    {/*end:Dashboards menu*/}
                                                </div>
                                                {/*end:Menu sub*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div
                                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                                data-kt-menu-placement="bottom-start"
                                                className="menu-item menu-lg-down-accordion me-0 me-lg-2"
                                            >
                                                {/*begin:Menu link*/}
                                                <span className="menu-link py-3">
                                                    <span className="menu-title">Pages</span>
                                                    <span className="menu-arrow d-lg-none" />
                                                </span>
                                                {/*end:Menu link*/}
                                                {/*begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                                                    {/*begin:Pages menu*/}
                                                    <div className="menu-active-bg px-4 px-lg-0">
                                                        {/*begin:Tabs nav*/}
                                                        <div className="d-flex w-100 overflow-auto">
                                                            <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                                                {/*begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a
                                                                        className="nav-link py-3 py-lg-6 active text-active-primary"
                                                                        href="#"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_app_header_menu_pages_pages"
                                                                    >
                                                                        General{" "}
                                                                    </a>
                                                                </li>
                                                                {/*end:Nav item*/}
                                                                {/*begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a
                                                                        className="nav-link py-3 py-lg-6  text-active-primary"
                                                                        href="#"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_app_header_menu_pages_account"
                                                                    >
                                                                        Account{" "}
                                                                    </a>
                                                                </li>
                                                                {/*end:Nav item*/}
                                                                {/*begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a
                                                                        className="nav-link py-3 py-lg-6  text-active-primary"
                                                                        href="#"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_app_header_menu_pages_authentication"
                                                                    >
                                                                        Authentication{" "}
                                                                    </a>
                                                                </li>
                                                                {/*end:Nav item*/}
                                                                {/*begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a
                                                                        className="nav-link py-3 py-lg-6  text-active-primary"
                                                                        href="#"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_app_header_menu_pages_utilities"
                                                                    >
                                                                        Utilities{" "}
                                                                    </a>
                                                                </li>
                                                                {/*end:Nav item*/}
                                                                {/*begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a
                                                                        className="nav-link py-3 py-lg-6  text-active-primary"
                                                                        href="#"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#kt_app_header_menu_pages_widgets"
                                                                    >
                                                                        Widgets{" "}
                                                                    </a>
                                                                </li>
                                                                {/*end:Nav item*/}
                                                            </ul>
                                                        </div>
                                                        {/*end:Tabs nav*/}
                                                        {/*begin:Tab content*/}
                                                        <div className="tab-content py-4 py-lg-8 px-lg-7">
                                                            {/*begin:Tab pane*/}
                                                            <div
                                                                className="tab-pane active w-lg-1000px"
                                                                id="kt_app_header_menu_pages_pages"
                                                            >
                                                                {/*begin:Row*/}
                                                                <div className="row">
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-8">
                                                                        {/*begin:Row*/}
                                                                        <div className="row">
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    User Profile
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/user-profile/overview.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Overview
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/user-profile/projects.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Projects
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/user-profile/campaigns.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Campaigns
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/user-profile/documents.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Documents
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/user-profile/followers.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Followers
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/user-profile/activity.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Activity
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Corporate
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/about.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                About
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/team.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Our Team
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/contact.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Contact Us
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/licenses.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Licenses
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/sitemap.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Sitemap
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Careers
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/careers/list.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Careers List
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/careers/apply.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Careers Apply
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        FAQ
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/faq/classic.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                FAQ Classic
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/faq/extended.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                FAQ Extended
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Blog
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/blog/home.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Blog Home
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/blog/post.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Blog Post
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Pricing
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/pricing/column.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Column Pricing
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/pricing/table.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Table Pricing
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Social
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/social/feeds.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Feeds
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/social/activity.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Activty
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/social/followers.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Followers
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="pages/social/settings.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Settings
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                        </div>
                                                                        {/*end:Row*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-4">
                                                                        <img
                                                                            src={`/assets/media/stock/600x600/img-82.jpg`}
                                                                            className="rounded mw-100"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                </div>
                                                                {/*end:Row*/}
                                                            </div>
                                                            {/*end:Tab pane*/}
                                                            {/*begin:Tab pane*/}
                                                            <div
                                                                className="tab-pane  w-lg-600px"
                                                                id="kt_app_header_menu_pages_account"
                                                            >
                                                                {/*begin:Row*/}
                                                                <div className="row">
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-5 mb-6 mb-lg-0">
                                                                        {/*begin:Row*/}
                                                                        <div className="row">
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-6">
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/overview.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Overview
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/settings.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Settings
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/security.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Security
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/activity.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Activity
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/billing.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Billing
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-6">
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/statements.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Statements
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/referrals.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Referrals
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/api-keys.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            API Keys
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="account/logs.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Logs
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                        </div>
                                                                        {/*end:Row*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-7">
                                                                        <img
                                                                            src={`/assets/media/stock/900x600/46.jpg`}
                                                                            className="rounded mw-100"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                </div>
                                                                {/*end:Row*/}
                                                            </div>
                                                            {/*end:Tab pane*/}
                                                            {/*begin:Tab pane*/}
                                                            <div
                                                                className="tab-pane  w-lg-1000px"
                                                                id="kt_app_header_menu_pages_authentication"
                                                            >
                                                                {/*begin:Row*/}
                                                                <div className="row">
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/*begin:Menu section*/}
                                                                        <div className="mb-6">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                Corporate Layout
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/corporate/sign-in.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-in
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/corporate/sign-up.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-up
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/corporate/two-steps.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Two-steps
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/corporate/reset-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Reset Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/corporate/new-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        New Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Menu section*/}
                                                                        {/*begin:Menu section*/}
                                                                        <div className="mb-0">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                Overlay Layout
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/overlay/sign-in.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-in
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/overlay/sign-up.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-up
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/overlay/two-steps.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Two-steps
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/overlay/reset-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Reset Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/overlay/new-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        New Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Menu section*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/*begin:Menu section*/}
                                                                        <div className="mb-6">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                Creative Layout
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/creative/sign-in.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-in
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/creative/sign-up.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-up
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/creative/two-steps.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Two-steps
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/creative/reset-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Reset Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/creative/new-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        New Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Menu section*/}
                                                                        {/*begin:Menu section*/}
                                                                        <div className="mb-6">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                Fancy Layout
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/fancy/sign-in.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-in
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/fancy/sign-up.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Sign-up
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/fancy/two-steps.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Two-steps
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/fancy/reset-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Reset Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/layouts/fancy/new-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        New Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Menu section*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/*begin:Menu section*/}
                                                                        <div className="mb-0">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                General
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/extended/multi-steps-sign-up.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Multi-steps Sign-up
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/extended/two-factor-auth.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Two Factor Auth
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/welcome.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Welcome Message
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/verify-email.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Verify Email
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/coming-soon.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Coming Soon
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/password-confirmation.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Password Confirmation
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/account-deactivated.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Account Deactivation
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/error-404.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Error 404
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/general/error-500.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Error 500
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Menu section*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/*begin:Menu section*/}
                                                                        <div className="mb-0">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                Email Templates
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/welcome-message.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Welcome Message
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/reset-password.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Reset Password
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/subscription-confirmed.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Subscription Confirmed
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/card-declined.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Credit Card Declined
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/promo-1.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Promo 1
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/promo-2.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Promo 2
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="authentication/email/promo-3.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Promo 3
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Menu section*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                </div>
                                                                {/*end:Row*/}
                                                            </div>
                                                            {/*end:Tab pane*/}
                                                            {/*begin:Tab pane*/}
                                                            <div
                                                                className="tab-pane  w-lg-1000px"
                                                                id="kt_app_header_menu_pages_utilities"
                                                            >
                                                                {/*begin:Row*/}
                                                                <div className="row">
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-7">
                                                                        {/*begin:Row*/}
                                                                        <div className="row">
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        General Modals
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/general/invite-friends.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Invite Friends
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/general/view-users.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                View Users
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/general/select-users.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Select Users
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/general/upgrade-plan.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Upgrade Plan
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/general/share-earn.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Share &amp; Earn
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/forms/new-target.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                New Target
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/forms/new-card.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                New Card
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/forms/new-address.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                New Address
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/forms/create-api-key.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create API Key
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/forms/bidding.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Bidding
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Advanced Modals
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/create-app.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create App
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/create-campaign.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create Campaign
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/create-account.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create Business Acc
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/create-project.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create Project
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/top-up-wallet.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Top Up Wallet
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/offer-a-deal.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Offer a Deal
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/two-factor-authentication.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Two Factor Auth
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Search
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/search/horizontal.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Horizontal
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/search/vertical.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Vertical
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/search/users.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Users
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/search/select-location.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Select Location
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                            {/*begin:Col*/}
                                                                            <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                {/*begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/*begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                        Wizards
                                                                                    </h4>
                                                                                    {/*end:Menu heading*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/horizontal.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Horizontal
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/vertical.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Vertical
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/two-factor-authentication.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Two Factor Auth
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/create-app.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create App
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/create-campaign.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create Campaign
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/create-account.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create Account
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/create-project.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Create Project
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/modals/wizards/top-up-wallet.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Top Up Wallet
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                    {/*begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/*begin:Menu link*/}
                                                                                        <a
                                                                                            href="utilities/wizards/offer-a-deal.html"
                                                                                            className="menu-link "
                                                                                        >
                                                                                            <span className="menu-title">
                                                                                                Offer a Deal
                                                                                            </span>
                                                                                        </a>
                                                                                        {/*end:Menu link*/}
                                                                                    </div>
                                                                                    {/*end:Menu item*/}
                                                                                </div>
                                                                                {/*end:Menu section*/}
                                                                            </div>
                                                                            {/*end:Col*/}
                                                                        </div>
                                                                        {/*end:Row*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-5 pe-lg-5">
                                                                        <img
                                                                            src={`/assets/media/stock/600x600/img-84.jpg`}
                                                                            className="rounded mw-100"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                </div>
                                                                {/*end:Row*/}
                                                            </div>
                                                            {/*end:Tab pane*/}
                                                            {/*begin:Tab pane*/}
                                                            <div
                                                                className="tab-pane  w-lg-500px"
                                                                id="kt_app_header_menu_pages_widgets"
                                                            >
                                                                {/*begin:Row*/}
                                                                <div className="row">
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-4 mb-6 mb-lg-0">
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="widgets/lists.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-title">
                                                                                    Lists
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="widgets/statistics.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-title">
                                                                                    Statistics
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="widgets/charts.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-title">
                                                                                    Charts
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="widgets/mixed.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-title">
                                                                                    Mixed
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="widgets/tables.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-title">
                                                                                    Tables
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                        {/*begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/*begin:Menu link*/}
                                                                            <a
                                                                                href="widgets/feeds.html"
                                                                                className="menu-link "
                                                                            >
                                                                                <span className="menu-title">
                                                                                    Feeds
                                                                                </span>
                                                                            </a>
                                                                            {/*end:Menu link*/}
                                                                        </div>
                                                                        {/*end:Menu item*/}
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                    {/*begin:Col*/}
                                                                    <div className="col-lg-8">
                                                                        <img
                                                                            src={`/assets/media/stock/900x600/44.jpg`}
                                                                            className="rounded mw-100"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    {/*end:Col*/}
                                                                </div>
                                                                {/*end:Row*/}
                                                            </div>
                                                            {/*end:Tab pane*/}
                                                        </div>
                                                        {/*end:Tab content*/}
                                                    </div>
                                                    {/*end:Pages menu*/}
                                                </div>
                                                {/*end:Menu sub*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div
                                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                                data-kt-menu-placement="bottom-start"
                                                className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                                            >
                                                {/*begin:Menu link*/}
                                                <span className="menu-link py-3">
                                                    <span className="menu-title">Apps</span>
                                                    <span className="menu-arrow d-lg-none" />
                                                </span>
                                                {/*end:Menu link*/}
                                                {/*begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">Projects</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        My Projects
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/project.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        View Project
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/targets.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Targets</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/budget.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Budget</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/users.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Users</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/files.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Files</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/activity.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Activity</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/projects/settings.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Settings</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm001.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">eCommerce</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                                data-kt-menu-placement="right-start"
                                                                className="menu-item menu-lg-down-accordion"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Catalog</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/catalog/products.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Products
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/catalog/categories.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Categories
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/catalog/add-product.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Add Product
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/catalog/edit-product.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Edit Product
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/catalog/add-category.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Add Category
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/catalog/edit-category.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Edit Category
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="click"
                                                                className="menu-item menu-accordion menu-sub-indention"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Sales</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-accordion">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/sales/listing.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Orders Listing
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/sales/details.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Order Details
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/sales/add-order.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Add Order
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/sales/edit-order.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Edit Order
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="click"
                                                                className="menu-item menu-accordion menu-sub-indention"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Customers
                                                                    </span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-accordion">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/customers/listing.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Customers Listing
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/customers/details.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Customers Details
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="click"
                                                                className="menu-item menu-accordion menu-sub-indention"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Reports</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-accordion">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/reports/view.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Products Viewed
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/reports/sales.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Sales
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/reports/returns.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Returns
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/reports/customer-orders.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Customer Orders
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/ecommerce/reports/shipping.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Shipping
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/ecommerce/settings.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Settings</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                Support Center
                                                            </span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/support-center/overview.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Overview</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                                data-kt-menu-placement="right-start"
                                                                className="menu-item menu-lg-down-accordion"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Tickets</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/support-center/tickets/list.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Ticket List
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/support-center/tickets/view.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Ticket View
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                                data-kt-menu-placement="right-start"
                                                                className="menu-item menu-lg-down-accordion"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Tutorials
                                                                    </span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/support-center/tutorials/list.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Tutorials List
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/support-center/tutorials/post.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Tutorials Post
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/support-center/faq.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">FAQ</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/support-center/licenses.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Licenses</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/support-center/contact.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Contact Us
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                User Management
                                                            </span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                                data-kt-menu-placement="right-start"
                                                                className="menu-item menu-lg-down-accordion"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Users</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/user-management/users/list.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Users List
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/user-management/users/view.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                View User
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                                data-kt-menu-placement="right-start"
                                                                className="menu-item menu-lg-down-accordion"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Roles</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/user-management/roles/list.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Roles List
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/user-management/roles/view.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                View Roles
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/user-management/permissions.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Permissions
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/electronics/elc002.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">Contacts</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/contacts/getting-started.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Getting Started
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/contacts/add-contact.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Add Contact
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/contacts/edit-contact.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Edit Contact
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/contacts/view-contact.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        View Contact
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                Subscriptions
                                                            </span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/subscriptions/getting-started.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Getting Started
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/subscriptions/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Subscription List
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/subscriptions/add.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Add Subscription
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/subscriptions/view.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        View Subscription
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">Customers</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/customers/getting-started.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Getting Started
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/customers/list.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Customer Listing
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/customers/view.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Customer Details
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M22 7H2V11H22V7Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                Invoice Management
                                                            </span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div
                                                                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                                data-kt-menu-placement="right-start"
                                                                className="menu-item menu-lg-down-accordion"
                                                            >
                                                                {/*begin:Menu link*/}
                                                                <span className="menu-link py-3">
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Profile</span>
                                                                    <span className="menu-arrow" />
                                                                </span>
                                                                {/*end:Menu link*/}
                                                                {/*begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/invoices/view/invoice-1.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Invoice 1
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/invoices/view/invoice-2.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Invoice 2
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/*begin:Menu link*/}
                                                                        <a
                                                                            className="menu-link py-3"
                                                                            href="apps/invoices/view/invoice-3.html"
                                                                        >
                                                                            <span className="menu-bullet">
                                                                                <span className="bullet bullet-dot" />
                                                                            </span>
                                                                            <span className="menu-title">
                                                                                Invoice 3
                                                                            </span>
                                                                        </a>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Menu sub*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/invoices/create.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Create Invoice
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/files/fil025.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">File Manager</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/file-manager/folders.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Folders</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/file-manager/files.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Files</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/file-manager/blank.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Blank Directory
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/file-manager/settings.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Settings</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">Inbox</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/inbox/listing.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Messages</span>
                                                                    <span className="menu-badge">
                                                                        <span className="badge badge-light-success">
                                                                            3
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/inbox/compose.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">Compose</span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/inbox/reply.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        View &amp; Reply
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div
                                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                        data-kt-menu-placement="right-start"
                                                        className="menu-item menu-lg-down-accordion"
                                                    >
                                                        {/*begin:Menu link*/}
                                                        <span className="menu-link py-3">
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={12}
                                                                            width={7}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={7}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">Chat</span>
                                                            <span className="menu-arrow" />
                                                        </span>
                                                        {/*end:Menu link*/}
                                                        {/*begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/chat/private.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Private Chat
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/chat/group.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Group Chat
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    className="menu-link py-3"
                                                                    href="apps/chat/drawer.html"
                                                                >
                                                                    <span className="menu-bullet">
                                                                        <span className="bullet bullet-dot" />
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Drawer Chat
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                        </div>
                                                        {/*end:Menu sub*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link py-3"
                                                            href="apps/calendar.html"
                                                        >
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                                <span className="svg-icon svg-icon-2">
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
                                                            </span>
                                                            <span className="menu-title">Calendar</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                </div>
                                                {/*end:Menu sub*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div
                                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                                data-kt-menu-placement="bottom-start"
                                                className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                                            >
                                                {/*begin:Menu link*/}
                                                <span className="menu-link py-3">
                                                    <span className="menu-title">Help</span>
                                                    <span className="menu-arrow d-lg-none" />
                                                </span>
                                                {/*end:Menu link*/}
                                                {/*begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link py-3"
                                                            href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                                                            target="_blank"
                                                            title="Check out over 200 in-house components, plugins and ready for use solutions"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">Components</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link py-3"
                                                            href="https://preview.keenthemes.com/html/metronic/docs"
                                                            target="_blank"
                                                            title="Check out the complete documentation"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                Documentation
                                                            </span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link py-3"
                                                            href="layout-builder.html"
                                                            title="Build your layout and export HTML for server side integration"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-dismiss="click"
                                                            data-bs-placement="right"
                                                        >
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                Layout Builder
                                                            </span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link py-3"
                                                            href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                                                            target="_blank"
                                                        >
                                                            <span className="menu-icon">
                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod003.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z"
                                                                            fill="currentColor"
                                                                        />
                                                                        <path
                                                                            opacity="0.3"
                                                                            d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </span>
                                                            <span className="menu-title">
                                                                Changelog v8.1.7
                                                            </span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                </div>
                                                {/*end:Menu sub*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end::Menu*/}
                                    </div>
                                    {/*end::Menu wrapper*/}
                                </div>
                                {/*end::Tab panel*/}
                                {/*begin::Tab panel*/}
                                <div className="tab-pane fade" id="kt_header_navs_tab_2">
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-primary fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs/base/forms/controls"
                                            >
                                                Controls
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-success fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs/base/forms/advanced"
                                            >
                                                Advanced
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-danger fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs/base/forms/floating-labels"
                                            >
                                                Floating Labels
                                            </a>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-info fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs/forms/autosize"
                                            >
                                                More Components
                                            </a>
                                        </div>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Tab panel*/}
                                {/*begin::Tab panel*/}
                                <div className="tab-pane fade" id="kt_header_navs_tab_3">
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-primary fw-bold"
                                                href="apps/user-management/users/list.html"
                                            >
                                                User Management
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-success fw-bold"
                                                href="apps/inbox/listing.html"
                                            >
                                                Inbox
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-danger fw-bold"
                                                href="apps/file-manager/folders.html"
                                            >
                                                File Manager
                                            </a>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-info fw-bold"
                                                href="apps/subscriptions/view.html"
                                            >
                                                More Apps
                                            </a>
                                        </div>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Tab panel*/}
                                {/*begin::Tab panel*/}
                                <div className="tab-pane fade" id="kt_header_navs_tab_4">
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-primary fw-bold"
                                                href="apps/ecommerce/catalog/products.html"
                                            >
                                                eCommerce
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-danger fw-bold"
                                                href="apps/file-manager/folders.html"
                                            >
                                                File Manager
                                            </a>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-info fw-bold"
                                                href="apps/subscriptions/view.html"
                                            >
                                                More Apps
                                            </a>
                                        </div>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Tab panel*/}
                                {/*begin::Tab panel*/}
                                <div className="tab-pane fade" id="kt_header_navs_tab_5">
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-primary fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs"
                                            >
                                                Documentation
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-success fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs/getting-started/video-tutorials"
                                            >
                                                Video Tutorials
                                            </a>
                                            <a
                                                className="btn btn-sm btn-light-danger fw-bold"
                                                href="layout-builder.html"
                                            >
                                                Layout Builder
                                            </a>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row gap-2">
                                            <a
                                                className="btn btn-sm btn-light-info fw-bold"
                                                href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                                            >
                                                Changelog
                                            </a>
                                        </div>
                                    </div>
                                    {/*end::Wrapper*/}
                                </div>
                                {/*end::Tab panel*/}
                            </div>
                            {/*end::Header tab content*/}
                        </div>
                        {/*end::Wrapper*/}
                    </div>
                    {/*end::Container*/}
                </div>
                {/*end::Header navs*/}
            </div>
            {/*end::Header*/}
        </>
    );
}