
import Toster from "./Toster";
import { Uploader, ImageUpload } from "./S3Bucket";
import FileUpload from "./FileUpload";
export default function page({ params }) {
    // console.log(params.item)
    const Template = () => {
        if (params.item.indexOf('toster') !== -1) {
            return <Toster />
        } else if (params.item.indexOf('upload-s2') !== -1) {
            return <FileUpload />
        } else if (params.item.indexOf('upload') !== -1) {
            return <ImageUpload />
        } else {
            return <h1>Hello World!</h1>
        }

    }
    return <Template />
}