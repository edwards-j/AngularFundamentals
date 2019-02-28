import { InjectionToken } from '@angular/core';
import { toASCII } from 'punycode';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
    success(mgs: string, title?: string): void;
    info(mgs: string, title?: string): void;
    warning(mgs: string, title?: string): void;
    error(mgs: string, title?: string): void;
}
