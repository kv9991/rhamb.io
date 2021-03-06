export const styles = (theme) => ({
  '@global': {
    '.slick-slide div': {
      outline: 'none !important',
    },
    '.slick-arrow': {
      extend: [
        theme.utils.flexbox.row,
        theme.utils.flexbox.jc_c,
        theme.utils.flexbox.ai_c,
      ],
      color: theme.colors.contrast_maximum,
      zIndex: '90',
      position: 'absolute',
      top: '50%',
      background: theme.colors.basic,
      marginTop: '-10px',
      borderRadius: '100%',
      width: '40px',
      height: '40px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.13)',
      transition: '0.2s all ease-in-out',
      transformOrigin: 'center center',
      cursor: 'pointer',
      '&:hover': {
        color: theme.colors.contrast_maximum,
        background: theme.colors.basic,
      },
      '&::before': {
        display: 'none',
      },
      '&.slick-disabled': {
        display: 'none',
      },
    },
  },
  root: {
    position: 'relative',
    maxWidth: '100%',
  },
});
