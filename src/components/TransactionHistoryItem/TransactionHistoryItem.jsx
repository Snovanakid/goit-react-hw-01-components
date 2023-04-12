import styles from './TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <tr className={styles.transactionHeader}>
            <td className={styles.transactionHeaderItem}>{type}</td>
            <td className={styles.transactionHeaderItem}>{amount}</td>
            <td className={styles.transactionHeaderItem}>{currency}</td>
        </tr>
    )
}

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};