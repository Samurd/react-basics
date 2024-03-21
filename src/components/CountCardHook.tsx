import useCount from "../hooks/useCount"

export function CountCardHook() {
    const { handleClick, count, countElement } = useCount({
        maxCount: 20
    });

    return (
        <div className="card">
            <h2 ref={countElement}>{count}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </div>
    )
}