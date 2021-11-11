import "../App.css";

export default function Checkbox({ label, value, onChange }) {
    const checkClassName = (state) => (state ? "checkStyle" : " ");

    return (
        <div>
            <label className={checkClassName(value)}>
                {label} {}
                <input
                    type="checkbox"
                    defaultChecked={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
