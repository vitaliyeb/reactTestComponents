import {IPost} from "../../types/api/post";
import styles from './style.module.css';

interface IProps {
    items: IPost[];
    isLoading: boolean;
}

const PostCardsViews = ({items, isLoading}: IProps) => {
    return (<div>
        <div className={styles.heading}>Posts</div>
        {
            items.map(({ id, title, body }) => (<div className={styles.post} key={id}>
                <p className={styles.title}>{ title }</p>
                <p className={styles.body}>{ body }</p>
            </div>))
        }
    </div>)
};

export default PostCardsViews;