const CommonModal = ({ open, setOpen, title, subtitle, content, onConfirm, singleButton }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-40">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-center">{title}</h2>
                {subtitle && <p className="mb-4 text-base text-gray-500">{subtitle}</p>}
                <div className="mb-2 text-base text-center">
                    <p className="mb-4 text-gray-500">{content}</p>
                </div>
                <div className="flex justify-center space-x-2">
                    {singleButton ? (
                        <button
                            className="justify-center w-full px-8 py-2 text-center rounded-lg dark__btn"
                            onClick={() => {
                                if (onConfirm) onConfirm();
                                setOpen(false);
                            }}>
                            확인
                        </button>
                    ) : (
                        <>
                            <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg" onClick={() => setOpen(false)}>
                                취소
                            </button>
                            <button
                                className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                                onClick={() => {
                                    if (onConfirm) onConfirm();
                                    setOpen(false);
                                }}>
                                확인
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommonModal;
