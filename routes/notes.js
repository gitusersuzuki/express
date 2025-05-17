var express = require('express');
var router = express.Router();
// ���X�|���X�̃f�[�^�i�m�[�g�S���j
const responseObjectDataAll = {
    textObject1 : {
        id: 1,
        title: '�m�[�g�P�̃^�C�g���ł�',
        subTitle: '�m�[�g�P�̃T�u�^�C�g���ł�',
        bodyText: '�m�[�g�P�̖{���ł�'
    },

    textObject2 : {
        id: 2,
        title: '�m�[�g�Q�̃^�C�g���ł�',
        subTitle: '�m�[�g�Q�̃T�u�^�C�g���ł�',
        bodyText: '�m�[�g�Q�̖{���ł�'
    },
};
/**
* ������S���擾����API
* @returns {Object[]} data
* @returns {number} data.id - ID
* @returns {string} data.title - �^�C�g��
* @returns {string} data.text - ���e
*/
router.get('/', function (req, res, next) {
// �S���擾���ĕԂ�
    res.json(responseObjectDataAll);
})
module.exports = router;