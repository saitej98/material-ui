import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export interface BadgeClasses {
  /** Class name applied to the root element. */
  root: string;
  /** Class name applied to the badge `span` element. */
  badge: string;
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }}`. */
  anchorOriginTopRight: string;
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }}`. */
  anchorOriginBottomRight: string;
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }}`. */
  anchorOriginTopLeft: string;
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }}`. */
  anchorOriginBottomLeft: string;
  /** Styles applied to the badge `span` element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the badge `span` element if `color="danger"`. */
  colorDanger: string;
  /** Styles applied to the badge `span` element if `color="info"`. */
  colorInfo: string;
  /** Styles applied to the badge `span` element if `color="neutral"`. */
  colorNeutral: string;
  /** Styles applied to the badge `span` element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the badge `span` element if `color="warning"`. */
  colorWarning: string;
  /** State class applied to the badge `span` element if `invisible={true}`. */
  invisible: string;
  /** State class applied to the badge `span` element if `location="inside"`. */
  locationInside: string;
  /** State class applied to the badge `span` element if `location="outside"`. */
  locationOutside: string;
  /** Styles applied to the badge `span` element if `size="sm"`. */
  sizeSm: string;
  /** Styles applied to the badge `span` element if `size="md"`. */
  sizeMd: string;
  /** Styles applied to the badge `span` element if `size="lg"`. */
  sizeLg: string;
  /** Styles applied to the badge `span` element if `variant="outlined"`. */
  variantOutlined: string;
  /** Styles applied to the badge `span` element if `variant="light"`. */
  variantLight: string;
  /** Styles applied to the badge `span` element if `variant="contained"`. */
  variantContained: string;
}

export type BadgeClassKey = keyof BadgeClasses;

export function getBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('MuiBadge', slot);
}

const badgeClasses: BadgeClasses = generateUtilityClasses('MuiBadge', [
  'root',
  'badge',
  'anchorOriginTopRight',
  'anchorOriginBottomRight',
  'anchorOriginTopLeft',
  'anchorOriginBottomLeft',
  'colorPrimary',
  'colorDanger',
  'colorInfo',
  'colorNeutral',
  'colorSuccess',
  'colorWarning',
  'invisible',
  'locationInside',
  'locationOutside',
  'sizeSm',
  'sizeMd',
  'sizeLg',
  'variantOutlined',
  'variantLight',
  'variantContained',
]);

export default badgeClasses;
