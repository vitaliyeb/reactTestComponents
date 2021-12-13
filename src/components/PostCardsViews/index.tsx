import {IPost} from "../../types/api/post";


interface IProps {
    items: IPost[];
    isLoading: boolean;
}

const PostCardsViews = ({items, isLoading}: IProps) => {
    console.log(items)
    return (<div>
        {
            items.map(({ id, title, body }) => (<div key={id}>
                <p>{ title }</p>
                <p>{ body }</p>
            </div>))
        }
    </div>)
};

export default PostCardsViews;