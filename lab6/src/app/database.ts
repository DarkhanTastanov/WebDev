
import { Albums, Photos } from "./models";

export const ALBUMS: Albums[] = [];
export const PHOTOS: Photos[] = [];
for(let i: number = 0; i < 5; i++){
    ALBUMS.push(
        {
            userId: i+1,
            id: i+1,
            title: `title ${i + 1}`,
            info: "Nothing to see here "
        }
    )
    PHOTOS.push(
        {
            albumId: i+1,
            id: i+1,
            title: `title ${i + 1}`,
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
    )
}
