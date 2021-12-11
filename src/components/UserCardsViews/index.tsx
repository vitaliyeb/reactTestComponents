import {IUser} from "../../types";
import styles from './style.module.css';

interface IProps {
    items: IUser[];
    isLoading: boolean;
}

const UserCardsViews = ({ items, isLoading }: IProps) => {
    return <div>
        {
            !isLoading && items.map((item, index) => (<div
                className={styles.userCard}
                key={index}
            >
                <div>
                    <div>{ item.name[0] }</div>
                    <div>
                        <p>{ item.name }</p>
                        <p>{ item.phone }</p>
                    </div>
                </div>
            </div>))
        }
    </div>
}

export default UserCardsViews;