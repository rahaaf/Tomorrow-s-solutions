import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Contact } from 'app/panlecontrole/contacts/contact.model';

@Component({
    selector     : 'contacts-contact-form-dialog',
    templateUrl  : './contact-form.component.html',
    styleUrls    : ['./contact-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ContactsContactFormDialogComponent
{
    phone= /((095|094|099|098|093){1}([0-9]{7}))/g;
    action: string;
    contact: Contact;
    contactForm: FormGroup;
    dialogTitle: string;
    accountingsoftware:false;
    MobileApplication:false;
    Officeapplications:false;
    Websites:false;
    // labelPosition: 'male' | 'female' = 'female';
  

    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<ContactsContactFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Contact';
            this.contact = _data.contact;
        }
        else
        {
            this.dialogTitle = 'New Contact';
            this.contact = new Contact({});
        }

        this.contactForm = this.createContactForm();
    }

    ngOnInit(): void {
        this.contactForm = this._formBuilder.group({
            name: ['', Validators.required],
            phone: ['', [Validators.required,Validators.pattern(this.phone)]],
            email: ['', [Validators.required, Validators.email]],
            jobTitle : ['', Validators.required],
            address : ['', Validators.required],
            gender : ['', Validators.required],
            birthday: ['', [Validators.required]],
            notes: ['', [Validators.required]]

        });
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createContactForm(): FormGroup
    {
        return this._formBuilder.group({
            // id      : [this.contact.id],
            name    : [this.contact.name],
            gender: [this.contact.gender],
            // avatar  : [this.contact.avatar],
            jobTitle: [this.contact.jobTitle],
            email   : [this.contact.email],
            phone   : [this.contact.phone],
            address : [this.contact.address],
            birthday: [this.contact.birthday],
            notes   : [this.contact.notes]
        });
    }
}
