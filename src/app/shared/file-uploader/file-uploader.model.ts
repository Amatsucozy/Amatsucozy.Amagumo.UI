import {FilePondOptions} from "filepond";

export class FileUploaderDefaults {
  static readonly singleFileDefaultOptions: Readonly<FilePondOptions> = {
    allowMultiple: false,
    allowImagePreview: true,
    allowImageTransform: true,
    allowImageCrop: true,
    allowImageExifOrientation: true,
    allowDrop: true,
    required: true,
    labelIdle: "Drop file here..."
  }

  static readonly multipleFilesDefaultOptions: Readonly<FilePondOptions> = {
    allowMultiple: true,
    allowImagePreview: true,
    allowImageTransform: true,
    allowImageCrop: true,
    allowImageExifOrientation: true,
    allowDrop: true,
    required: false,
    labelIdle: "Drop files here..."
  }
}
