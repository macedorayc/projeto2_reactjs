import './index.scss';

export default  function ItemMeta(props) {


    return (
        <li className='comp-item-meta'>
         <i className='fa fa-pen-to-square' onClick={() => props.alterarmeta(props.pos)}></i> &nbsp;
         <i className='fa fa-trash-can' onClick={() => props.removermeta(props.pos)}></i> &nbsp;
         {props.item}

        </li>
    )
}