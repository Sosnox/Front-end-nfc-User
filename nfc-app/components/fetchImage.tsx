export const fetchImage = (imagePath : string) => {
    return process.env.NEXT_PUBLIC_URL_IMAGE + imagePath;
}