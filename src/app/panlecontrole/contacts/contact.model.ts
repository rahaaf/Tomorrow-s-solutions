import { FuseUtils } from '@fuse/utils';

export class Contact
{
    id: string;
    name: string;
    gender: string;
    avatar: string;
    // nickname: string;
    // company: string;
    jobTitle:{
        accountingsoftware:string,
        MobileApplications:string,
        Officeapplications:string,
        Websites:string,
    }[];
    email: string;
    phone: string;
    address: string;
    birthday: string;
    notes: string;

    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact)
    {
        {
            this.id = contact.id || FuseUtils.generateGUID();
            this.name = contact.name || '';
            this.gender = contact.gender || [];
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            // this.nickname = contact.nickname || '';
            // this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || [];
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birthday || '';
            this.notes = contact.notes || '';
        }
    }
}
