import { useModalContext } from '#root/renderer/useModalContext';
import '../styles/Modal.scss';
export { Modal }

function Modal({ title, content }: { title: string; content: React.ReactNode }) {
  const { setModal } = useModalContext();

  const closeModal = () => {
    setModal({
      title: '',
      content: null,
    });
  };
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={closeModal} />
			<div className="modal__inside">
				<div className="modal__header">
					<h2>{title}</h2>
				</div>
				<div className="modal__content">{content}</div>
			</div>
		</div>
  );
}