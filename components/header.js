import styles from '../styles/Home.module.css'

export default function Header(props) {
    return (
        <header>
            <div>
                <h1 className='bg-primary px-3 text-white display-4 text-right'>
                    {props.header}
                </h1>
            </div>
        </header>
    )
}