import createRepository from '@/api/api.repository';

import constants from '@/api/api.constants';

export default (ctx, inject) => {
  ctx.$axios.setBaseURL(process.env.BASE_API);

  ctx.$axios.onRequest((config) => {
    if (process.env.NODE_ENV === 'development') {
      console.info('Request - ' + config.url);
    }
  });

  ctx.$axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    console.info('Code error - ' + code);
  });

  const repository = createRepository(ctx.$axios);

  inject('usersRepository', repository(constants.users));
};
