import {NgModule} from '@angular/core';
import {FilePondModule, registerPlugin} from "ngx-filepond";
import * as FilePondImagePreview from "filepond-plugin-image-preview";
import * as FilePondImageCrop from "filepond-plugin-image-crop";
import * as FilePondImageEXIFOrientation from "filepond-plugin-image-exif-orientation";
import * as FilePondImageResize from "filepond-plugin-image-resize";
import * as FilePondImageTransform from "filepond-plugin-image-transform";
import { FileUploaderComponent } from './file-uploader.component';

registerPlugin(
  FilePondImagePreview,
  FilePondImageCrop,
  FilePondImageEXIFOrientation,
  FilePondImageResize,
  FilePondImageTransform);


@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [FilePondModule],
  exports: [FilePondModule, FileUploaderComponent]
})
export class FileUploaderModule {
}
