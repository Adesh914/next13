"use client"
import { useState, useEffect } from "react";
// https://codesandbox.io/p/sandbox/react-select-all-checkbox-jbub2?file=%2Fsrc%2Findex.js%3A15%2C3-29%2C5
export function Checkbox({ id, type, name, action, handleClick, isChecked }) {

  console.log("Action", action);
  return (
    <tr key={id}>

      <td className="text-gray-800">{name} {id}</td>

      <td>
        <div className="d-flex">
          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
            <input
              id={`role_${id}_${action[1]}`}
              className="form-check-input"
              type={type}
              onChange={handleClick}
              checked={isChecked}
            />
            <span className="form-check-label">{action[1]}</span>
          </label>
          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
            <input
              id={id[action[2]]}
              className="form-check-input"
              type={type}
              onChange={handleClick}
              checked={isChecked}
            />
            <span className="form-check-label">{action[2]}</span>
          </label>
          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
            <input
              id={id[action[3]]}
              className="form-check-input"
              type={type}
              onChange={handleClick}
              checked={isChecked}
            />
            <span className="form-check-label">{action[3]}</span>
          </label>
        </div>
      </td>
    </tr>
  )
}
export default function page({ params }) {
  const modulesData = [
    {
      "id": "01",
      "name": "User Management",
      "section": "User Management",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "02",
      "name": "Content Management",
      "section": "Content Management",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "03",
      "name": "Financial Management",
      "section": "Financial Management",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "04",
      "name": "Reporting",
      "section": "Reporting",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "05",
      "name": "Payroll",
      "section": "Payroll",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "06",
      "name": "Disputes Management",
      "section": "Disputes Management",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "07",
      "name": "API Controls",
      "section": "API Controls",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "08",
      "name": "Database Management",
      "section": "Database Management",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    },
    {
      "id": "09",
      "name": "Repository Management",
      "section": "Repository Management",
      "action": { 1: "Read", 2: "Write", 3: "Create" }
    }
  ];
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState();
  // useEffect(() => {
  //   setList(modulesData);
  // }, [list])
  const checkedBx = ({ id }) => {
    if (!id) {

    } else {

    }

  }
  const handleSelectAll = e => {
    // console.log(e.target.checked)

    setIsCheckAll(!isCheckAll);
    setIsCheck(modulesData.map(({ id, action }) => `${id}_${action[1]}`));
    // if (isCheckAll) {
    //   setIsCheck([]);
    // }
    console.log("isCheck", isCheck)

  };

  const handleClick = e => {
    const { id, checked } = e.target;
    console.log("ID:", id, checked)
    document.getElementById(id)
    // setIsCheck([...isCheck, id]);
    // if (!checked) {
    //   setIsCheck(isCheck.filter(item => item !== id));
    // }

  };
  const permissionList = modulesData.map(({ id, name, action }) => {
    // console.log("isCheck.includes(id):", isCheck)
    return (
      <>
        <Checkbox
          key={id}
          id={id}
          name={name}
          action={action}
          type={`checkbox`}
          handleClick={handleClick}
          isChecked={isCheckAll}
        //isCheck.includes(`${id}_${action[1]}`)
        />
      </>
    );
  })
  return (<>
    <div
      id="kt_content_container"
      className="d-flex flex-column-fluid align-items-start  container-xxl "
    >
      {/*begin::Post*/}
      <div className="content flex-row-fluid" id="kt_content">
        {/*begin::Card*/}
        <div className="card card-flush ">
          {/*begin::Card header*/}
          <div className="card-header mt-6">
            {/*begin::Card title*/}
            <div className="card-title">
              {/*begin::Search*/}
              <div className="d-flex align-items-center position-relative my-1 me-5">
                {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                <span className="svg-icon svg-icon-1 position-absolute ms-6">
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
                {/*end::Svg Icon*/}{" "}
                <input
                  type="text"
                  data-kt-permissions-table-filter="search"
                  className="form-control form-control-solid w-250px ps-15"
                  placeholder="Search Permissions"
                />
              </div>
              {/*end::Search*/}
            </div>
            {/*end::Card title*/}
            {/*begin::Card toolbar*/}
            <div className="card-toolbar">
              {/*begin::Button*/}
              <button
                type="button"
                className="btn btn-light-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_permission"
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                <span className="svg-icon svg-icon-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.3"
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={5}
                      fill="currentColor"
                    />
                    <rect
                      x="10.8891"
                      y="17.8033"
                      width={12}
                      height={2}
                      rx={1}
                      transform="rotate(-90 10.8891 17.8033)"
                      fill="currentColor"
                    />
                    <rect
                      x="6.01041"
                      y="10.9247"
                      width={12}
                      height={2}
                      rx={1}
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/} Add Permission
              </button>
              {/*end::Button*/}
            </div>
            {/*end::Card toolbar*/}
          </div>
          {/*end::Card header*/}
          {/*begin::Card body*/}
          <div className="card-body pt-0">
            <form id="kt_modal_update_role_form" className="form" action="#">
              {/*begin::Scroll*/}
              <div
                className="d-flex flex-column scroll-y me-n7 pe-7"
                id="kt_modal_update_role_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_update_role_header"
                data-kt-scroll-wrappers="#kt_modal_update_role_scroll"
                data-kt-scroll-offset="300px"
              >
                {/*begin::Input group*/}
                <div className="fv-row mb-10">
                  {/*begin::Label*/}
                  <label className="fs-5 fw-bold form-label mb-2">
                    <span className="required">Role name</span>
                  </label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <input
                    className="form-control form-control-solid"
                    placeholder="Enter a role name"
                    name="role_name"
                    defaultValue="Developer"
                  />
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Permissions*/}
                <div className="fv-row">
                  {/*begin::Label*/}
                  <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>
                  {/*end::Label*/}
                  {/*begin::Table wrapper*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table align-middle table-row-dashed fs-6 gy-5">
                      {/*begin::Table body*/}
                      <tbody className="text-gray-600 fw-semibold">
                        {/*begin::Table row*/}
                        <tr>
                          <td className="text-gray-800">
                            Administrator Access
                            <i
                              className="fas fa-exclamation-circle ms-1 fs-7"
                              data-bs-toggle="tooltip"
                              title="Allows a full access to the system"
                            />
                          </td>
                          <td>
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="kt_roles_select_all"
                                onClick={handleSelectAll}
                                checked={isCheckAll}
                              />
                              <span
                                className="form-check-label"
                                htmlFor="kt_roles_select_all"
                              >
                                Select all
                              </span>
                            </label>
                            {/*end::Checkbox*/}
                          </td>
                        </tr>
                        {/*end::Table row*/}
                        {/*begin::Table row*/}
                        {permissionList}
                        {modulesData.map((item, index) => {
                          return (<>
                            <tr id={index}>

                              <td className="text-gray-800">{item.section} {index}</td>

                              <td>

                                <div className="d-flex">

                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value="1"
                                      checked={isCheckAll}
                                      // onChange={''}
                                      name={`user_management_${index}_1`}
                                    />
                                    <span className="form-check-label">{item.action[1]}</span>
                                  </label>

                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value="1"
                                      checked={isCheckAll}
                                      name={`user_management_${index}_2`}
                                    />
                                    <span className="form-check-label">{item.action[2]}</span>
                                  </label>

                                  <label className="form-check form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value="1"
                                      checked={isCheckAll}
                                      name={`user_management_${index}_3`}
                                    />
                                    <span className="form-check-label">{item.action[3]}</span>
                                  </label>

                                </div>

                              </td>

                            </tr>
                          </>)
                        })}
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table wrapper*/}
                </div>
                {/*end::Permissions*/}
              </div>
              {/*end::Scroll*/}
              {/*begin::Actions*/}
              <div className="text-center pt-15">
                <button
                  type="reset"
                  className="btn btn-light me-3"
                  data-kt-roles-modal-action="cancel"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-kt-roles-modal-action="submit"
                >
                  <span className="indicator-label">Submit</span>
                  <span className="indicator-progress">
                    Please wait...{" "}
                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                </button>
              </div>
              {/*end::Actions*/}
            </form>

          </div>
          {/*end::Card body*/}
        </div>
        {/*end::Card*/}

      </div>
      {/*end::Post*/}
    </div>

  </>);
}
