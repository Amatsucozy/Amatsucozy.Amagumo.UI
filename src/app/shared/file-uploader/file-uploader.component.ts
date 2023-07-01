import {Component, Input, OnInit} from '@angular/core';
import {FilePondOptions} from "filepond";
import {FileUploaderDefaults} from "./file-uploader.model";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Input() single: boolean;
  options: Readonly<FilePondOptions> | undefined;

  constructor() {
    this.single = true;
  }

  ngOnInit(): void {
    this.options = this.single
      ? FileUploaderDefaults.singleFileDefaultOptions
      : FileUploaderDefaults.multipleFilesDefaultOptions;
  }

  onProcessFile(event: any): void {
    console.log(event);
  }
}
