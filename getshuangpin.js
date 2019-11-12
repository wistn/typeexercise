/*
 * Author:wistn
 * since:2019-10-19
 * LastEditors:Do not edit
 * LastEditTime:2019-10-20
 * Description:
 */
function getshuangpin(quanpin, scheme) {
    if (arguments.length < 2) {
      return  getshuangpin(quanpin, 'guang');
    } else {
        switch (arguments[1]) {
            case 'guang': {
                var str = arguments[0];
                var hasshengmu = str.match(/b|p|m|f|d|t|l|n|g|k|h|j|q|x|zh?|ch?|sh?|y|w/i);
                if (hasshengmu) {
                    var shengmulen = hasshengmu[0].length;
                    var shengmu = str.slice(0, shengmulen).replace(/^(zh|ch|sh|y|w)$/i, function (all) {
                        return {
                            'ch': 'c',
                            'sh': 's',
                            'zh': 'z',
                            'y': 'i',
                            'w': 'u',
                        } [all];
                    });
                    var yunmu = str.slice(shengmulen).replace(/^(ai|an|ang|ao|ei|en|eng|er|ia|ian|iang|iao|ie|in|ing|iong|iu|ong|ou|ua|uai|uan|uang|ue|ve|ui|un|uo)$/i, function (all) {
                        return {
                            'ai': 'a',
                            'an': 'l',
                            'ang': 'l',
                            'ao': 'a',
                            'ei': 'e',
                            'en': 'e',
                            'eng': 'e',
                            'er': 'e',
                            'ia': 'z',
                            'ian': 'q',
                            'iang': 'q',
                            'iao': 'z',
                            'ie': 'z',
                            'in': 'q',
                            'ing': 'q',
                            'iong': 'q',
                            'iu': 'z',
                            'ong': 'o',
                            'ou': 'o',
                            'ua': 'w',
                            'uai': 'w',
                            'uan': 'w',
                            'uang': 'w',
                            'ue': 'w',
                            've': 'w',
                            'ui': 'w',
                            'un': 'w',
                            'uo': 'w',
                        } [all];
                    });
                    return shengmu + yunmu;
                } else {
                    var lingshengmu = str.replace(/^(a|ai|an|ang|ao|e|ei|en|er|o|ou)$/i, function (all) {
                        return {
                            'a': 'oa',
                            'ai': 'oa',
                            'an': 'ol',
                            'ang': 'ol',
                            'ao': 'oa',
                            'e': 'oe',
                            'ei': 'oe',
                            'en': 'oe',
                            'er': 'oe',
                            'o': 'oo',
                            'ou': 'oo',
                        } [all];
                    });
                    return lingshengmu;
                }
                
            }
        }
    }
}
// var arr = [];
// 'shi-zhong-bi-jiao-ling-ren-zhu-mu-de-yi-jian-fa-sheng-zai-e-hai-e-zhou-ge-lun-bu-shi-wo-you-ji-ge-peng-you-jia-zai-na-er-yi'.split('-').forEach(function (item) {
//     arr.push(getshuangpin(item));
// });
// console.log(arr.toString());