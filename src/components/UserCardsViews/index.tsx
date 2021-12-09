import {IUser} from "../../types";


interface IProps {
    items: IUser[];
    isLoading: boolean;
}

const UserCardsViews = ({ items, isLoading }: IProps) => {
    return <div>
        {
            !isLoading && items.map((item, index) => (<div>
                { item.name }
            </div>))
        }
    </div>
}

export default UserCardsViews;