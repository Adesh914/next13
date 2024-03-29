
import Link from "next/link";

const MenuWrapper = (currentPath) => {
    // console.log("renderPath", currentPath.renderPath)
    // const router = useRouter();

    // console.log("router", currentPath);
    // console.log(currentPath.renderPath)

    // const menuHandler = (event) => {
    //     event.preventDefault();
    //     if (event.target.hasAttribute('data-link')) {
    //         const url = event.target.getAttribute('data-link');
    //         console.log('as path', url)
    //         router.push(url)
    //     } else {
    //         router.push('/admin')
    //     }

    // }

    return (
        <>
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
                            <Link

                                className={`nav-link ${currentPath.renderPath.length == 2 && currentPath.renderPath.indexOf('admin') !== -1 ? 'active' : ''}`}
                                /* data-bs-toggle="tab" */
                                href="/admin"
                            >
                                Features
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link

                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_4"
                            >
                                Reports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link

                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_5"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                data-link="/admin/users"
                                className={`nav-link ${currentPath.renderPath.indexOf('users') !== -1 ? 'active' : ``}`}
                                /*  data-bs-toggle="tab" */
                                href="/admin/users/list"
                            >
                                Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                data-link="/admin/products"
                                className={`nav-link ${currentPath.renderPath.indexOf('products') !== -1 ? 'active' : ``}`}
                                /*  data-bs-toggle="tab" */
                                href="/admin/products/list"
                            >
                                Product
                            </Link>
                        </li>
                    </ul>
                    {/*begin::Header tabs*/}
                </div>
                {/*end::Header tabs wrapper*/}
            </div>
        </>
    )
}

export default MenuWrapper;