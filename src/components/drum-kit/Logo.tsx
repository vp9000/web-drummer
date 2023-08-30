export default function Logo() {
  return (
    <div className='grow'>
      <h2 className='text-3xl text-purple-900'>
        <div>Web</div>
        <div>Drummer</div>
      </h2>

      <div className='text-xs text-purple-900 text-opacity-25'>
        v{__APP_VERSION__} | {__APP_GIT_SHA__}
      </div>
    </div>
  );
}
