<template>
    <v-row>
        <v-col sm="8" style="margin: 0 auto">
            <div class="d-flex flex-row justify-center align-center">
                <v-form v-model="isValid" style="width: 80%">
                    <v-text-field
                        v-model="urlToShorten"
                        label="Shorten Url"
                        :rules="urlRules"
                        class="pr-5"
                        hide-details="auto"
                    ></v-text-field>
                </v-form>
                <v-btn @click="generateUrl" :disabled="!isValid">Click </v-btn>
            </div>
        </v-col>

        <v-col sm="8" style="margin: 0 auto">
            <v-simple-table v-if="urlSaves.length > 0">
                <template>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Url
                            </th>
                            <th class="text-left">
                                Shorten Url
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in urlSaves" :key="index">
                            <td style="max-width: 60%">{{ item.url }}</td>
                            <td>
                                <a :href="item.shortenUrl">{{
                                    item.shortenUrl
                                }}</a>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppContext } from '@/AppContext';
import { validateUrl } from '@/utils/validate';
import { UrlStructure } from '@/types/response';
import { Action, Getter } from 'vuex-class';
import { InputValidationRules } from 'vuetify';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    @Getter('info/shortenUrls') urlSaves!: Array<UrlStructure>;
    @Action('info/setShortenUrls') setShortenUrls!: (
        urlInfos: Array<UrlStructure>
    ) => void;

    urlToShorten = '';
    shortenUrls: Array<UrlStructure> = [];
    isValid = false;

    urlRules: InputValidationRules = [
        value => !!value || 'Url Required',
        value => validateUrl(value) || 'Url is invalid'
    ];

    async generateUrl(): Promise<void> {
        const shortenUrl = await AppContext.apiExecutor.getShortenUrl({
            url: this.urlToShorten
        });

        this.shortenUrls.push({
            url: this.urlToShorten,
            shortenUrl: shortenUrl.data.picseeUrl
        });

        this.setShortenUrls(this.shortenUrls);
    }
}
</script>

<style lang="scss" scoped>
.input-width {
    width: 50%;
}
</style>
