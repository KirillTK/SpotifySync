import {HttpService, Injectable} from "@nestjs/common";

@Injectable()
export class SpotifyService {
  constructor(private http: HttpService) {}


  getMyProfile() {
  }
}