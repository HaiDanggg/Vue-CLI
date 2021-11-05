<template>
    <div class="add-form">
        <div>
            <h4>Thêm Liên hệ</h4>
            <ContactForm
            :contact = "contact"
            @contact-submit = "createContact"
            />
        <p>{{ message }}</p>
        </div>

    </div>
</template>

<script>
import ContactService from "../services/contact.service";
import ContactForm from "../components/ContactForm";
export default {
    name: "ContactAdd",
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {},
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            const [error, response] = await this.handle(
                ContactService.create(data)
            );
            if (error) {
                console.log(error);
            } else {
                console.log(response.data);
                this.message = "Liên hệ đã được đệ trình thành công."
            }
        },
    },
};

</script>