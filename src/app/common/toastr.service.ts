import {Injectable} from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
    success(message: string) {
        toastr.success(message);
    }

    info(message: string) {
        toastr.info(message);
    }

    warning(message: string) {
        toastr.warning(message);
    }

    error(message: string) {
        toastr.error(message);
    }
}
