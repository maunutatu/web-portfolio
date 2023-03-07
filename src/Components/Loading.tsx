import './Loading.css'

const Loading = () => {
  return (
    <div className={'loadingDiv'}>
      <div className="loading-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={'loadingText'}>Loading...</p>
    </div>
  )
}

export default Loading