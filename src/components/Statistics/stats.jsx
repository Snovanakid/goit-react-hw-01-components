import style from "./stats.module.css"
import PropTypes from "prop-types"

export const Statistics = ({title, stats}) => {
    return (
    <section className={style.statistics}>

            {title && <h2 className={style.statsTitle}>{title}</h2>}
            <ul className={style.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={style.statsItem} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={style.statsLabel} style={{ color: getRandomHexColor() }}>{label}</span>
                        <span className={style.percentage} style={{ color: getRandomHexColor() }}>{percentage + "%"}</span>
                    </li>
                ))}
        </ul>
    </section>
    )
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};