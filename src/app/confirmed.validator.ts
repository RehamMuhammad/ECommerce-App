import { FormGroup } from '@angular/forms';
    
export function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup)  => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            return { confirmedValidator: true };
        } else {
            return { confirmedValidator: null };
        }
    }
}


//ConfirmedValidator('password', 'confirmPassword')

// 1- Password Pattern
// 2- Patterns works and others not
// 3- Custom validator doesn't work => validation Done in HTML
// Study dirty attribute and its cases