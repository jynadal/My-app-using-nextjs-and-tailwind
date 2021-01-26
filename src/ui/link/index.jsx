import NextLink from "next/link";
import {useRouter} from "next/router";

import styles from './styles.module.css';

export default function Link({href, children}) {
    const router = useRouter();

   // console.dir(router.asPath);

    return (
        <NextLink href={href}>
            <a className={router.asPath === href && styles.active}>
                {children}
            </a>
        </NextLink>
    )
}
