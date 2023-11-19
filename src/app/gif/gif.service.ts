import { Injectable } from '@angular/core';
import axios from 'axios';
import { GifphyGifDataInterface } from './types';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class GifService {
    private GIFPY_API_KEY = 'x7OATdljegQldezxECWthgEe14AV80Nx'
    private TENOR_API_KEY = 'AIzaSyC676iljrF2tjeNvqs6ptr1oV4ewMl2fR8'
    private TENOR_CLIENT_KEY = 'my_test_app'
    private FIXED_LIMIT = 50;
    private ERROR_MSG ='something went wrong while trying to get the gifs'

    
    constructor(private toastr: ToastrService) { }

    public async getGifphyGifs(searchQuery:string): Promise<GifphyGifDataInterface[]> {
        const baseUrl = 'https://api.giphy.com/v1/gifs/search/'
        try {

            const {data, status, statusText} = await axios.get(`${baseUrl}?api_key=${this.GIFPY_API_KEY}&limit=${this.FIXED_LIMIT}&q=${searchQuery}`)
            
            if(status != 200){
                this.toastr.error(this.ERROR_MSG, statusText)
                return [] as GifphyGifDataInterface[]
            }
            
            return data.data as GifphyGifDataInterface[]    
        } catch (error) {
            this.toastr.error(this.ERROR_MSG, error as string)
            return [] as GifphyGifDataInterface[]
        }
        
    }

    public async getTenorGifs(searchQuery:string): Promise<GifphyGifDataInterface[]> {
        const baseUrl = 'https://tenor.googleapis.com/v2/search'
        try {

            const {data, status, statusText} = await axios.get(`${baseUrl}?q=${searchQuery}&key=${this.TENOR_API_KEY}&client_key=${this.TENOR_CLIENT_KEY}&limit=${this.FIXED_LIMIT}`)
            
            if(status != 200){
                this.toastr.error(this.ERROR_MSG, statusText)
                return [] as any[]
            }

            console.log(data);
            

            const results: GifphyGifDataInterface[] = data.results.map((element:any) => {
                return {
                    title: element?.content_description as string,
                    images:{
                        
                        original:{
                            webp: element?.media_formats?.gif?.url as string,
                            frames:'',
                            height:'',
                            mp4:'',
                            width:''
                        }
                    }
                }
            }) 
            return results as GifphyGifDataInterface[]     
        } catch (error) {
            this.toastr.error(this.ERROR_MSG, error as string)
            return [] as any[]
        }
        
    }
}