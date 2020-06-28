import { Validators } from '@angular/forms';

const regex = {
    onluNumbers: /\"^[0-9]"/
};

export const AlbumIdValidator = Validators.compose([
    Validators.required,
    Validators.pattern(regex.onluNumbers)
]);
export const UserIdValidator = Validators.compose([
    Validators.required,
    Validators.pattern(regex.onluNumbers)
]);
export const AlbumTitleValidator = Validators.compose([
    Validators.required
]);
