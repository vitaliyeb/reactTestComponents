import load from "./load";

export class Photos {
    static async getPhotoById(id: number) {
        return load(`/photos/${id}`);
    }
}