import { ImgHTMLAttributes } from '../../../node_modules/react';
export type GeneratedImageLike = {
    base64?: string;
    uint8Array?: Uint8Array;
    mediaType?: string;
};
export type ImageProps = GeneratedImageLike & Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    alt: string;
};
export declare const Image: ({ base64, uint8Array, mediaType, className, alt, ...props }: ImageProps) => import("react/jsx-runtime").JSX.Element;
