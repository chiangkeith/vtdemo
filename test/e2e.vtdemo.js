import { Selector } from 'testcafe';
import { FILTER_GROUPS, FILTER_DURATION_DEFINATION } from '../src/constants'
import { filter, get, padStart, reverse, sortBy, toInteger } from 'lodash'
import ZHTW from '../src/locale/zh-TW'
import axios from 'axios'
import truncate from 'truncate-html'
fixture `Getting Started`
    .page `https://chiangkeith.github.io/vtdemo/dist/`; 

test('make sure we get correct filters', async t => {
  await t.expect(Selector('.filter-group').count).eql(FILTER_GROUPS.length);
});
test('make sure we get correct sorting/filtering tools', async t => {
  const fg = FILTER_GROUPS || [];
  for (let i = 0; i < FILTER_GROUPS.length; i += 1) {
    const options = get(FILTER_GROUPS[ i ], 'items', []);
    const eleGroup = Selector('.filter-group').child('.items').nth(i);
    await t.expect(eleGroup.child('.item').count).eql(options.length);
    for (let j = 0; j < options.length; j += 1) {
      await t.expect(eleGroup.child('.item').nth(j).textContent).eql(get(ZHTW, `${options[ j ].toUpperCase()}`));
      j === 0 && await t.expect(eleGroup.child('.item').nth(j).hasClass('active')).eql(true);
    }
  }
});

const saltList = (orig, sortingBy, filterBy) => {
  let filtered = [];
  if (filterBy === 'nolimit') {
    filtered = orig;
  } else {
    const constraintBottom = get(FILTER_DURATION_DEFINATION, `${filterBy}.0`) * 60;
    const constraintTop = get(FILTER_DURATION_DEFINATION, `${filterBy}.1`, 0) * 60;
    filtered = filter(orig, item => {
      return constraintTop
        ? item.duration < constraintTop && item.duration >= constraintBottom
        : item.duration >= constraintBottom
    })
  }
  return reverse(sortBy(filtered, [ sortingBy ]));
}
let listShouldBe = []
test('make sure we get correct origin list', async t => {
  listShouldBe = await axios.get('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')
  .then(res => saltList(get(res, 'data.data'), 'publish', 'nolimit'))
  .catch(() => ([]))
  const eleItems = Selector('.list__container').child('.list-item');
  await t.expect(eleItems.count).eql(listShouldBe.length);
  for (let i = 0; i < listShouldBe.length; i += 1) {
    const eleItem = eleItems.nth(i)
    await t.expect(eleItem.find('.list-item__leading img').getAttribute('src')).eql(listShouldBe[ i ].thumbnail);

    const hour = toInteger(get(listShouldBe[ i ], 'duration') / 60 / 60);
    const min = padStart(toInteger(get(listShouldBe[ i ], 'duration') / 60) % 60, 2, '0');
    const sec = padStart(get(listShouldBe[ i ], 'duration') % 60, 2, '0');
    const tiemstamp = hour ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
    await t.expect(eleItem.find('.list-item__leading .duration').textContent).eql(tiemstamp);

    const title = truncate(get(listShouldBe[ i ], 'title'), 40);
    await t.expect(eleItem.find('.list-item__title').textContent).eql(title);
    await t.expect(eleItem.find('.list-item__info .count').textContent).eql(`${get(listShouldBe[ i ], 'collectCount')}`);

    const level = get(ZHTW, `LEVEL.${get(listShouldBe[ i ], 'level', '')}`);
    await t.expect(eleItem.find('.list-item__info .tags .level').textContent).eql(level);

    const captions = get(listShouldBe[ i ], 'captions', []);
    for (let j = 0; j < captions.length; j += 1) {
      const caption = get(ZHTW, `CC.${captions[ j ].toUpperCase()}`);
      await t.expect(eleItem.find('.list-item__info .tags .caption').nth(j).textContent).eql(caption);
    }
  }
});

test('make sure sorting and filtering work well', async t => {
  const fg = FILTER_GROUPS || [];
  let filterType1 = 'publish'
  let filterType2 = 'nolimit'
  for (let i = 0; i < FILTER_GROUPS.length; i += 1) {
    const filterName = get(FILTER_GROUPS[ i ], 'name', []);
    const options = get(FILTER_GROUPS[ i ], 'items', []);
    const eleGroup = Selector('.filter-group').child('.items').nth(i);

    for (let j = 0; j < options.length; j += 1) {
    //   // await t.expect(eleGroup.child('.item').nth(j).textContent).eql(get(ZHTW, `${options[ j ].toUpperCase()}`));
    //   // j === 0 && await t.expect(eleGroup.child('.item').nth(j).hasClass('active')).eql(true);
      if (filterName === 'sort') {
        filterType1 = options[ j ];
      } else {
        filterType2 = options[ j ];
      }
      await t.click(eleGroup.child('.item').nth(j))
      const currentListLike = saltList(listShouldBe, filterType1, filterType2)
      const eleItems = Selector('.list__container').child('.list-item');
      for (let x = 0; x < currentListLike.length; x += 1) {
        const eleItem = eleItems.nth(x)
        await t.expect(eleItem.find('.list-item__leading img').getAttribute('src')).eql(currentListLike[ x ].thumbnail);
    
        const hour = toInteger(get(currentListLike[ x ], 'duration') / 60 / 60);
        const min = padStart(toInteger(get(currentListLike[ x ], 'duration') / 60) % 60, 2, '0');
        const sec = padStart(get(currentListLike[ x ], 'duration') % 60, 2, '0');
        const tiemstamp = hour ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
        await t.expect(eleItem.find('.list-item__leading .duration').textContent).eql(tiemstamp);
    
        const title = truncate(get(currentListLike[ x ], 'title'), 40);
        await t.expect(eleItem.find('.list-item__title').textContent).eql(title);
        await t.expect(eleItem.find('.list-item__info .count').textContent).eql(`${get(currentListLike[ x ], 'collectCount')}`);
    
        const level = get(ZHTW, `LEVEL.${get(currentListLike[ x ], 'level', '')}`);
        await t.expect(eleItem.find('.list-item__info .tags .level').textContent).eql(level);
    
        const captions = get(currentListLike[ x ], 'captions', []);
        for (let y = 0; y < captions.length; y += 1) {
          const caption = get(ZHTW, `CC.${captions[ y ].toUpperCase()}`);
          await t.expect(eleItem.find('.list-item__info .tags .caption').nth(y).textContent).eql(caption);
        }
      }
    }
  }
})
