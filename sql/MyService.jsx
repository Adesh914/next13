"use client";
import { useState, useEffect } from "react";
export const DataService = {
    "bpa_service": [
        { "Id": "bs-1", "Name": "Cash", "Order": 1, "SQL": 15 },
        { "Id": "bs-2", "Name": "Cashless", "Order": 2, "SQL": 16 }
    ],
    "bpa_service_type": [
        { "Id": "bst-1", "Name": "Not Required", "Order": 1 },
        { "Id": "bst-2", "Name": "Email", "Order": 2 },
        { "Id": "bst-3", "Name": "CRM", "Order": 3 },
        { "Id": "bst-4", "Name": "Courier", "Order": 4 }
    ],
    "bpa_service_facility": [
        { "Id": "bsf-1", "Name": "OPD", "Order": 1 },
        { "Id": "bsf-2", "Name": "IPD", "Order": 2 }
    ],
    "bpa_service_doc": [
        { "Id": "bsd-1", "Name": "AL Required (Through Email)", "Order": 1 },
        { "Id": "bsd-2", "Name": "TPA/Medical Card", "Order": 2 },
        { "Id": "bsd-3", "Name": "Referral Letter", "Order": 3 },
        { "Id": "bsd-4", "Name": "Service Card (Employ ID)", "Order": 4 },
        { "Id": "bsd-5", "Name": "Valid Identity Proof", "Order": 5 },
        { "Id": "bsd-6", "Name": "Others", "Order": 6 }
    ]
};
export const Servicetype = ({ ServiceName, change, sfChange, bs }) => {
    // console.log(`bs service ${ServiceName}:`, bs[ServiceName])
    return (
        <div key="st" style={{ paddingLeft: `7% ` }}>
            {DataService.bpa_service_type.map((sr, i) => {
                return (<div key={i} >
                    <input type="checkbox"
                        className={ServiceName}
                        checked={bs[ServiceName][`type_${i}`]}
                        onChange={(e) => change(e)} //`${ ServiceName }_${ i }`, e.target.checked
                        id={`${ServiceName}_${i}`}
                        name={`type_${i}`}
                        value={sr.Id} key={i}
                    />{sr.Name}
                    <ServiceFacility service_facility={`${ServiceName}_${i}`} whenChange={sfChange} bs={bs[ServiceName][sr.Id]} serviceId={i} />

                </div>)
            })}
        </div>
    );
}
export const ServiceFacility = ({ service_facility, whenChange, bs, serviceId }) => {

    return (
        <div key="st" style={{ paddingLeft: `7% ` }}>
            {DataService.bpa_service_facility.map((sf, i) => {
                return (<div key={i} >

                    <input
                        type="checkbox"
                        value={sf.Id}
                        checked={bs[sf.Id]}
                        id={`${service_facility} - ${sf.Name}`}
                        className={service_facility}
                        name={serviceId}
                        key={i}
                        onChange={(e) => whenChange(e)}
                    />{sf.Name}
                    <hr />
                </div>)
            })}
        </div>
    );
}
export default function MyService() {

    const [root, setRoot] = useState({ Cash: false, Cashless: false });
    const [bs, setBs] = useState({
        Cash: {
            "type_0": false,
            "bst-1": { "bsf-1": false, "bsf-2": false },
            "type_1": false,
            "bst-2": { "bsf-1": false, "bsf-2": false },
            "type_2": false,
            "bst-3": { "bsf-1": false, "bsf-2": false },
            "type_3": false,
            "bst-4": { "bsf-1": false, "bsf-2": false },
        },
        Cashless: {
            "type_0": false,
            "bst-1": { "bsf-1": false, "bsf-2": false },
            "type_1": false,
            "bst-2": { "bsf-1": false, "bsf-2": false },
            "type_2": false,
            "bst-3": { "bsf-1": false, "bsf-2": false },
            "type_3": false,
            "bst-4": { "bsf-1": false, "bsf-2": false },
        }
    });
    const [serviceCount, setServiceCount] = useState(0);
    const checkedFacility = (id, facilityCheckBox) => {
        let cf = document.querySelectorAll(`.${id}`);
        cf.forEach((facilityDoc) => {
            facilityDoc.checked = facilityCheckBox;
        })
    }
    const checkedAllService = (cls, rootchecked) => {

        setBs(prevBs => {
            return {
                ...prevBs,
                [cls]: {
                    ...prevBs[cls],
                    ["type_0"]: rootchecked,
                    "bst-1": { "bsf-1": rootchecked, "bsf-2": rootchecked },
                    ["type_1"]: rootchecked,
                    "bst-2": { "bsf-1": rootchecked, "bsf-2": rootchecked },
                    ["type_2"]: rootchecked,
                    "bst-3": { "bsf-1": rootchecked, "bsf-2": rootchecked },
                    ["type_3"]: rootchecked,
                    "bst-4": { "bsf-1": rootchecked, "bsf-2": rootchecked },
                },
            }
        });

    }

    const changeService = (e) => {

        const { id, name, value, checked } = e.target;
        const rootBox = id.split('_');

        let totalChecked = document.querySelectorAll(`.${rootBox[0]}:checked`);
        console.log("totalChecked", rootBox[0], bs, totalChecked.length)
        if (parseInt(totalChecked.length) === 0) {
            setRoot(oldservice => {
                return {
                    ...oldservice,
                    [rootBox[0]]: checked
                }
            })
        }

        if (parseInt(totalChecked.length) === 1 && root[rootBox[0]] === false) {
            setRoot(oldservice => {
                return {
                    ...oldservice,
                    [rootBox[0]]: checked
                }
            })
        }
        setBs(prevBs => {
            return {
                ...prevBs,
                [rootBox[0]]: {
                    ...prevBs[rootBox[0]],
                    [name]: checked,
                    [value]: { "bsf-1": checked, "bsf-2": checked }
                },
            }
        });


    }
    const changeFacility = (e) => {
        const { id, name, value, checked } = e.target;
        const facBox = id.split('-');
        const servName = facBox[0].split('_');
        console.log("totalChecked:", facBox[0], servName[0], checked);


        setBs(prevBs => {
            return {
                ...prevBs,
                [servName[0]]: {
                    ...prevBs[servName[0]],
                    // [`type_${name}`]: checked,
                    [`bst-${parseInt(name) + 1}`]: {
                        ...prevBs[servName[0]][[`bst-${parseInt(name) + 1}`]],
                        [value]: checked
                    }
                },
            }
        });
        // get checked service
        let totalChecked = document.querySelectorAll(`.${facBox[0]}:checked`);


        // checked root service after clicking opd/ipd
        if (parseInt(totalChecked.length) === 0 && root[servName[0]] === false) {
            setRoot(oldservice => {
                return {
                    ...oldservice,
                    [servName[0]]: checked
                }
            });
            setBs(prevBs => {
                return {
                    ...prevBs,
                    [servName[0]]: {
                        ...prevBs[servName[0]],
                        [`type_${name}`]: checked
                    },
                }
            });
        }
    }
    const changeRoot = (e) => {
        const { name, checked } = e.target;
        setRoot((prevRoot) => {
            return {
                ...prevRoot,
                [name]: checked
            }
        })
        checkedAllService(name, checked);
    }

    return (

        <div style={{ width: `100 % `, paddingLeft: `5% ` }} key="root">
            {/* {console.log("bs:", bs)} */}

            {DataService.bpa_service.map((serv, index) => {
                return (
                    <div style={{ width: "40%" }} key={index}>
                        <input
                            type="checkbox"
                            id={serv.Name}
                            checked={serv.Name == `Cash` ? root.Cash : root.Cashless}
                            value={serv.Id
                            }
                            name={serv.Name}
                            key={serv.Name}
                            onChange={changeRoot}
                        />{serv.Name}
                        <Servicetype ServiceName={serv.Name} change={changeService} sfChange={changeFacility} bs={bs} />
                    </div>
                )
            })}
        </div>
    );
}