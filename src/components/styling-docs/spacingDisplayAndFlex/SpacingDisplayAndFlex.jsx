import React from 'react';

const SpacingDisplayAndFlex = () => {
  return (
    <div>
      В этом приложении есть возможность устанавливать стили отступов, отображения и флекса из bootstrap 5.
      Я не стал переносить сюда документацию по этим стилям, решив что лучше оставлю здесь ссылки на официальную
      документацию.

      Отступы: https://getbootstrap.com/docs/5.0/utilities/spacing/
      Отображение: https://getbootstrap.com/docs/5.0/utilities/display/
      Флекс: https://getbootstrap.com/docs/5.0/utilities/flex/

      Эти стили расположены по следующему пути:
      Файл подключения стилей: src\styles\bootstrap.scss
      Файлы сами стилей расположены по пути: src\styles\bootstrap
    </div>
  );
};

export default SpacingDisplayAndFlex;